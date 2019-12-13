/* eslint-disable no-unused-vars */
import uuid from 'uuid/v4';

export default {
  PasswordEvent: {
    roadmap: parent => parent.getPasswordRoadmap()
  },
  PasswordRoadmap: {
    events: parent => parent.getPasswordEvents()
  },
  Query: {
    passwordEvent: (parent, { id, ...args }, { db, ...context }) =>
      db.passwordEvent.findByPk(id),
    passwordRoadmap: (parent, args, { db, ...context }) =>
      db.passwordRoadmap.findOne({ where: args })
  },
  Mutation: {
    createPasswordEvent: (
      parent,
      { slug, password, color, ...args },
      { db, ...context }
    ) =>
      db.passwordRoadmap
        .findOne({
          where: {
            slug,
            password
          },
          attributes: ['id']
        })
        .then(({ id }) =>
          db.passwordEvent.create({
            passwordRoadmapId: id,
            color: color || '#FFFFFF',
            id: uuid(),
            ...args
          })
        ),
    updatePasswordEvent: (
      parent,
      { slug, password, id, ...args },
      { db, ...context }
    ) =>
      db.passwordRoadmap
        .findOne({
          where: {
            slug,
            password
          }
        })
        .then(() => db.passwordEvent.update(args, { where: { id } })),
    deletePasswordEvent: (
      parent,
      { slug, password, id, ...args },
      { db, ...context }
    ) =>
      db.passwordRoadmap
        .findOne({
          where: {
            slug,
            password
          }
        })
        .then(() => db.passwordEvent.destroy(args, { where: { id } })),
    createPasswordRoadmap: (parent, args, { db, ...context }) =>
      db.passwordRoadmap.create({ ...args, id: uuid() }),
    updatePasswordRoadmap: (parent, { id, ...args }, { db, ...context }) =>
      db.passwordRoadmap.update(args, {
        where: {
          id
        }
      }),
    deletePasswordRoadmap: (parent, args, { db, ...context }) =>
      db.passwordRoadmap.destroy({ where: args })
  }
};
