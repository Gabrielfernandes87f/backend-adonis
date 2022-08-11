import Route from '@ioc:Adonis/Core/Route'


Route.get('/auth', 'AuthController.index')
Route.post('/auth', 'AuthController.store')
Route.put('/auth', 'AuthController.put').middleware('auth')
Route.delete('/auth', 'AuthController.destroy').middleware('auth')

