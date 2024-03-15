//Create Collection
db.createCollection('user2');

//Data Base
db.user2.insertOne({    
    names : 'Cristhian David',
    Lastnames : 'Bermudez Monsalve',
    email : 'cristhian@gmail.com',
    city : 'Medellín',
    country : 'Colombia',
    salary : 2700,
    age : 31,
    height : 160,
    weight : 140
});

db.user2.insertOne({    
    names : 'Daniel Andres',
    Lastnames : 'Ramirez Montoya',
    email : 'daniel@gmail.com',
    city : 'Medellín',
    country : 'Colombia',
    salary : 1500,
    age : 18,
    height : 160,
    weight : 140
});

db.user2.insertOne({    
    names : 'Estefania Dayana',
    Lastnames : 'Usuga Montoya',
    email : 'estefa@gmail.com',
    city : 'París',
    country : 'Francia',
    salary : 2800,
    age : 24,
    height : 155,
    weight : 130
});

db.user2.insertOne({    
    names : 'Gonzalo Manuel',
    Lastnames : 'Osorio Arias',
    email : 'gonzalo@gmail.com',
    city : 'Londres',
    country : 'Inglaterra',
    salary : 1880,
    age : 32,
    height : 173,
    weight : 128
});

db.user2.insertOne({    
    names : 'Manuel',
    Lastnames : 'Murillo Toro',
    email : 'manu@gmail.com',
    city : 'España',
    country : 'Inglaterra',
    salary : 3200,
    age : 27,
    height : 173,
    weight : 128
});

db.user2.insertOne({    
    names : 'Cristopher Davud',
    Lastnames : 'Hernandez Smit',
    email : 'cris@gmail.com',
    city : 'New York',
    country : 'Estados Unidos',
    salary : 1500,
    age : 45,
    height : 183,
    weight : 128
});

db.user2.insertOne({    
    names : 'Jhon Albeiro',
    Lastnames : 'Swing Canguro',
    email : 'cris@gmail.com',
    city : 'Sidney',
    country : 'Australi',
    salary : 2400,
    age : 28,
    height : 183,
    weight : 141
});

db.user2.insertOne({    
    names : 'María Mercedez',
    Lastnames : 'Espinoza candamil',
    email : 'Merce@gmail.com',
    city : 'Ottawa',
    country : 'Canadá',
    salary : 2400,
    age : 22,
    height : 183,
    weight : 141
});

db.user2.insertOne({    
    names : 'Giuanlugi',
    Lastnames : 'Buffon',
    email : 'buffon@gmail.com',
    city : 'Roma',
    country : 'Italia',
    salary : 2400,
    age : 21,
    height : 183,
    weight : 141
});

db.user2.insertOne({    
    names : 'Lucas',
    Lastnames : 'Henao',
    city : 'Usuahia',
    country : 'Argentina',
    salary : 3200,
    age : 27,
    height : 183,
    weight : 141
});

db.user2.insertOne({    
    names : 'Dahiana',
    Lastnames : 'Ochoa',
    city : 'Santiago',
    country : 'Chile',
    salary : 4200,
    age : 17,
    height : 183,
    weight : 141
});

db.user2.insertOne({    
    names : 'Ronaldiño',
    Lastnames : 'Gaucho',
    city : 'Sao Pablo',
    country : 'Brasil',
    salary : 4200,
    age : 42,
    height : 183,
    weight : 118
});

db.user2.insertOne({    
    names : 'Sergio',
    Lastnames : 'Ramos',
    city : 'Madrid',
    email : 'sergio@gmail.com',
    country : 'España',
    salary : 3200,
    age : 35,
    height : 183,
    weight : 118
});

db.user2.insertOne({    
    names : 'Memo',
    Lastnames : 'Ochoa',
    email : 'memo@gmail.com',
    city : 'Chihuahua',
    country : 'Mexico',
    salary : 1800,
    age : 43,
    height : 183,
    weight : 118
});

db.user2.insertOne({    
    names : 'Thomas Antonio',
    Lastnames : 'Muller',
    email : 'thomas@gmail.com',
    city : 'Berlin',
    country : 'Alemania',
    salary : 1800,
    age : 43,
    height : 183,
    weight : 118
});

db.user2.insertOne({    
    names : 'Eden Samuel',
    Lastnames : 'Hazar Goyzen',
    email : 'eden@gmail.com',
    city : 'Hamburgo',
    country : 'Alemania',
    salary : 1800,
    age : 24,
    height : 183,
    weight : 118
});

db.user2.insertOne({    
    names : 'Ragim',
    Lastnames : 'Bolin',
    email : 'ragi@gmail.com',
    city : 'Bombay',
    country : 'India',
    age : 38,
    height : 156,
    weight : 110
});

//List data
db.user2.find();

//Activity
//1. Obtener todos los usuarios que sean mayores de 18 años.
db.user2.find({age : { $gt : 18}});

//2. Obtener todos los usuarios que sean de Londres o de París.
db.user2.find({ city : { $in : ['Londres', 'París'] } });

//3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.user2.find({ $and :
    [
        { salary : { $gt : 2000}},
        { age : { $lt : 30}}
    ]
});

//4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.user2.find({ $and :
    [
        { country : { $eq : 'España'}},
        { salary : { $gt : 3000}}
    ]
});

//5. Obtener todos los usuarios que tengan entre 25 y 35 años.
db.user2.find({ $and:
    [
        {age : { $gte : 25}},
        {age : { $lte : 35}},
    ]
});

//6. Obtener a todos los usuarios que no sean de Estados Unidos.
db.user2.find({country: { $ne : 'Estados Unidos'}});

//7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.user2.find({$and: 
    [
        {city : { $eq : 'Londres'}},
        {$or :
            [
                {salary : { $gt : 2500}},
                {age : { $gt : 30}},
            ]
        }
        
    ]
});

//8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.user2.find({ $and :
    [
        {country : { $eq : 'Australi'}},
        {weight : { $gt : 140}}
    ]
});

//9. Obtener a todos los usuarios que no sean de Londres ni de París.
db.user2.find({city : { $nin : ['Londres', 'París']}});

//10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.user2.find({$or:
    [
        {salary : {$lt : 2000}},
        {age : {$gt : 40}}
    ] 
});

//11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.user2.find({$and :
    [
        {country : {$eq : 'Canadá'}},
        {$or :
            [
                {salary : {$gt : 4000}},
                {height : {$gt : 180}}
            ]
        }
    ]
});

//12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.user2.find({$and : 
    [
        {country : {$in : ['Italia']}},
        {$and:
            [
                {age : {$gte : 20}},
                {age : {$lte : 30}},
            ]
        }
    ]
})

//13. Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.user2.find({email : { $exists : false}});

//14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.user2.find({$and : 
    [
        {country : {$in : ['Francia']}},
        {$and :
            [
                {salary : {$gte : 3000}},
                {salary : {$lte : 5000}}
            ]

        }
    ]
});

//15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.user2.find({$and : 
    [
        {country : {$in : ['Brasil']}},
        {$or : 
            [
                {weight : {$lt : 120}},
                {weight : {$gt : 140}},
            ]
        }
    ]
});

//16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.user2.find({$and : 
    [
        {country : {$in : ['Argentina', 'Chile']}},
        {age : {$lt : 25}}
    ]
});

//17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.user2.find({ $and :
    [
        {country : { $nin : ['España', 'Mexico']}},
        {salary : {$lt : 3000}}
    ]
});

//18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.user2.find({ $and :
    [
        {country : {$eq : 'Alemania'}},
        {$or :
            [
                {salary : {$lt : 4000}},
                {age : {$gt : 35}}
            ]
        }
    ]
});

//19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.user2.find({$and :
    [
        {country : {$nin : ['Colombia']}},
        {height : {$lt : 170}}
    ]
});

//20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.user2.find({$and : 
    [
        {country : {$in : ['India']}},
        {salary : {$exists : false}},
    ]
});