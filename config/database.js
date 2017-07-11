// export const DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                        (process.env.NODE_ENV === 'production' ?
//                             process.env.MONGOLAB_URI :
//                             'mongodb://localhost/food-app-dev');
export const DATABASE_URL = (process.env.NODE_ENV === 'production' ?
                            process.env.MONGOLAB_URI :
                            'mongodb://localhost/food-app-dev');
export const PORT = process.env.PORT || 8080;
