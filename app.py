import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

cra_folder = 'build'
app = Flask(__name__, static_folder=cra_folder)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite3'
routes = ({
    'index': '/',
    'clients': '/v1/api/clients',
    'campaigns': '/v1/api/campaigns',
    'tasks': '/v1/api/tasks',
    'task': '/v1/api/tasks/<int:id>',
    'data-refresh': '/v1/api/data/refresh',
})

clients = (
    {'id': 1, 'name': 'Client #1', },
    {'id': 2, 'name': 'Client #2', },
)
tasks = [
    {'id': 1, 'name': 'Report of Danone Versa in-progress', 'clientId': 1,
     'campaignId': 1, 'status': 'in-progress', 'dateRange': '2019-02-01 - 2019-03-01'},
    {'id': 2, 'name': 'Report of Danone Versa done', 'clientId': 1,
     'campaignId': 1, 'status': 'done', 'dateRange': '2019-02-01 - 2019-03-01'},
    {'id': 3, 'name': 'Channels of LR True view','clientId': 2,  'campaignId': 2, 'status': 'done', 'dateRange': '2019-01-01 - 2019-02-01'}
]
campaigns = (
    {'id': 1, 'clientId': 1, 'name': 'Campaign #1'},
    {'id': 2, 'clientId': 2, 'name': 'Campaign #2'},
)
counter = tasks.__len__()

# Serve React App
@app.route(routes['index'], defaults={'path': ''}, methods=['GET'])
@app.route('/<path:path>/')
def serve(path):
    if path != "" and os.path.exists(cra_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route(routes['clients'], methods=['GET'])
def get_clients():
    return jsonify({
        'ok': True,
        'result': {
            'message': 'Clients loaded!',
            'count': clients.__len__(),
            'clients': clients
        }
    })


@app.route(routes['campaigns'])
def get_client_campaigns():
    client = request.args.get('client', None, int)
    if client is None:
        return jsonify({
            'ok': False,
            'error': {
                'message': 'Client is not specified!'
            }
        })
    filtered_campaigns = list(filter(lambda c: c['clientId'] == client, campaigns))
    return jsonify({
        'ok': True,
        'result': {
            'message': 'Campaigns found!',
            'count': filtered_campaigns.__len__(),
            'campaigns': filtered_campaigns
        }
    })


@app.route(routes['tasks'], methods=['POST', 'GET'])
def get_tasks():
    if request.method == 'POST':
        tasks.append({
            'id': ++counter,
            'clientId': int(request.values['client']),
            'campaignId': int(request.values['campaign']),
            'dateRange': request.values['dateRange'],
            'name': request.values['name'],
            'status': 'created'
        })
        return jsonify({'ok': True, 'result': {'message': 'Saved!'}})
    if request.method == 'GET':
        try:
            if 'client' in request.args:
                client = request.args.get('client', None, int)
                filtered_tasks = list(filter(lambda t: t['clientId'] == client, tasks))
            elif 'campaign' in request.args:
                campaign = request.args.get('campaign', None, int)
                filtered_tasks = list(filter(lambda t: t['campaignId'] == campaign, tasks))
            else:
                filtered_tasks = tasks
            return jsonify({
                'ok': True,
                'result': {
                    'message': 'Tasks found!',
                    'count': filtered_tasks.__len__(),
                    'tasks': filtered_tasks
                }
            })
        except:
            return jsonify({
                'ok': False,
                'error': {
                    'message': 'Some error',
                }
            })


@app.route(routes['task'], methods=['GET'])
def get_task_by_id(id):
    return jsonify({
        'ok': True,
        'result': {
            'message': 'Task found!',
            'task': list(filter(lambda t: t['id'] == id, tasks))
        }
    })


@app.route(routes['data-refresh'], methods=['POST'])
def data_refresh():
    return jsonify({'ok': True, 'result': {'message': 'Clients and campaigns will be updated soon!'}})


if __name__ == '__main__':
    app.run(debug=True)

