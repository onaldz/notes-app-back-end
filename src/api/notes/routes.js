const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    //   handler: addNoteHandler,
    handler: handler.postNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    //   handler: getAllNotesHandler,
    handler: handler.getNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    //   handler: getNoteByIdHandler,
    handler: handler.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    //   handler: editNoteByIdHandler,
    handler: handler.putNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    //   handler: deleteNoteByIdHandler,
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
