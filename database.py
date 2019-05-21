from flask_sqlalchemy import SQLAlchemy
from app import app
db = SQLAlchemy(app)


class ClientEntity(db.Model):
    __tablename__ = 'clients'
    id = db.Column('id', db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return '<Client %r>' % self.name


class TaskEntity(db.Model):
    __tablename__ = 'tasks'
    id = db.Column('id', db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    clientId = db.Column(db.Integer, db.ForeignKey('clients.id'), nullable=False)
    client = db.relationship('ClientEntity', back_populates='tasks')
    campaignId = db.Column(db.Integer, db.ForeignKey('campaigns.id'), nullable=False)
    campaign = db.relationship('CampaignEntity')
    statusId = db.Column(db.Integer, db.ForeignKey('task_statuses.id'), nullable=False)
    status = db.relationship('TaskStatusEntity', back_populates='tasks')


class CampaignEntity(db.Model):
    __tablename__ = 'campaigns'
    id = db.Column('id', db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class TaskStatusEntity(db.Model):
    __tablename__ = 'task_statuses'
    id = db.Column('id', db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


t = CampaignEntity(name='campaign #1')