from flask import Flask, request, jsonify
app = Flask(__name__)

routes = ({
    'index': '/',
    'clients': '/clients',
    'campaigns': '/campaigns',
    'tasks': '/tasks',
    'task': '/tasks/<int:id>',

})

clients = (
    {'id': 1, 'name': 'Client #1', },
    {'id': 2, 'name': 'Client #2', },
)
tasks = [
    {'id': 1, 'clientId': 1, 'campaignId': 1, 'status': 'in-progress'},
    {'id': 2, 'clientId': 2,  'campaignId': 2, 'status': 'done'}
]
campaigns = (
    {'id': 1, 'clientId': 1, 'name': 'Campaign #1'},
    {'id': 2, 'clientId': 2, 'name': 'Campaign #2'},
)


@app.route(routes['index'], methods=['GET'])
def index():
    return 'Alive!'


@app.route(routes['clients'], methods=['GET'])
def get_clients():
    return jsonify(clients);


@app.route('/campaigns')
def get_client_campaigns():
    client = request.args.get('client', None, int)
    if client is None:
        return jsonify({'ok': False, 'error': {'message': 'Client is not specified!'}})
    return jsonify(list(filter(lambda c: c['clientId'] == client, campaigns)))


@app.route(routes['tasks'], methods=['POST', 'GET'])
def get_tasks():
    if request.method == 'POST':
        tasks.append({'id': 3, 'clientId': int(request.values['client']), 'campaignId': int(request.values['campaign']), 'status': 'created'})
        return jsonify({'ok': True, 'message': 'Saved!'})
    if request.method == 'GET':
        if 'client' in request.args:
            client = request.args.get('client', None, int)
            filtered_tasks = list(filter(lambda t: t['clientId'] == client, tasks))
        elif 'campaign' in request.args:
            campaign = request.args.get('campaign', None, int)
            filtered_tasks = list(filter(lambda t: t['campaignId'] == campaign, tasks))
        else:
            filtered_tasks = tasks
        return jsonify(filtered_tasks)


@app.route(routes['task'], methods=['GET'])
def get_task_by_id(id):
    return jsonify(list(filter(lambda t: t['id'] == id, tasks)))

if __name__ == '__main__':
    app.run(debug=True)
