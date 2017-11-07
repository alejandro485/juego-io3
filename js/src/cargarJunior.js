function cargarJunior() {
    var junior = {
        preguntas: [
            {
                texto: "Traeme el informe de costos de este mes, cualquiera del piso se lo puede facilitar",
                repeticiones: 0,
                opciones: [
                    { /// Opcion para el minijuego de disparos
                        interaccion: "Te podria ayudar, pero esta en la bodega y tenemos un problema de plagas, me ayudarias con eso?",
                        aceptacion: "listo, vamos para alla",
                        cancelacion: "Vale, pero no podre darte el informe",
                        fallo: "Lastima, los murcielagos interrumpen el paso",
                        probable: "Mira, aqui esta el informe, gracias por todo",
                        improbable: "No lo tenia yo, que pena, lo siento"
                    },
                    {
                        interaccion: "Vi el informe de costos por aquí hace un rato mientras comía algo, pero no sé si los animalillos se lo habrán comido, ¿entramos para mirar?",
                        aceptacion: "Miremos donde estará",
                        cancelacion: "Bueno tu veras ",
                        fallo: "Parece que se lo comieron ",
                        probable: "listo, aqui esta",
                        improbable: "Mmm no parece estar, que pena"
                    },
                    {
                        interaccion: "Ese informe paso por mis manos pero esto es más urgente, ¿me ayudas?",
                        aceptacion: "listo, lo que tienes que hacer es muy sencillo",
                        cancelacion: "¡Que paso con el trabajo en equipo!",
                        fallo: "Oh no, los patitos lo mancharon",
                        probable: "Sano y salvo, como te lo prometí",
                        improbable: "Debí refundirlo en otra parte."
                    },
                    {
                        interaccion: "Lo buscaría pero estoy muy asustada ¿podrías ayudarme?",
                        aceptacion: "Gracias, ven",
                        cancelacion: "…., pues no tengo nada",
                        fallo: "Noo, lastima el señor miyato lo tenia ",
                        probable: "Estaba archivado, toma aquí tienes ",
                        improbable: "Que mal, parece que se lo llevo el cartero "
                    }
                ]
            },
            {
                texto: "Tráeme un café",
                repeticiones: 0,
                opciones: [
                    { /// Opcion para el minijuego de disparos
                        interaccion: "En la bodega seguro hay café pero tenemos un problema de plagas, me ayudarias con eso?",
                        aceptacion: "listo, vamos para alla",
                        cancelacion: "Vale, pero no podre darte el café",
                        fallo: "Lastima, los murcielagos se lo tomaron",
                        probable: "Mira, aqui esta el café, gracias por todo",
                        improbable: "Me lo tome yo, que pena, lo siento"
                    },
                    {
                        interaccion: "Esta es una cafetería seguro debe haber  pero no sé si los animalillos se lo habrán comido, entramos para mirar?",
                        aceptacion: "Miremos donde estará",
                        cancelacion: "Bueno tu veras ",
                        fallo: "Parece que se lo comieron ",
                        probable: "listo, aqui esta",
                        improbable: "Mmm no parece estar, que pena"
                    },
                    {
                        interaccion: "Tengo café en mi maleta pero esto es más urgente, ¿me ayudas?",
                        aceptacion: "listo, lo que tienes que hacer es muy sencillo",
                        cancelacion: "No ayuda, no café",
                        fallo: "Oh no, los patitos lo regaron",
                        probable: "Rico y delicioso, como te lo prometí",
                        improbable: "Debí refundirlo en otra parte."
                    },
                    {
                        interaccion: "Al señor Miyato le encanta el café ¿podrías ayudarme?",
                        aceptacion: "Gracias, ven",
                        cancelacion: "…., pues no te compartirá nada",
                        fallo: "Noo, lastima el señor miyato lo tenia ",
                        probable: "El señor Miyato es generoso , toma aquí tienes ",
                        improbable: "Que mal, parece lo cambio por nueces   "
                    }
                ]
            },
            {
                texto: "Encuentra el número de la empresa de materiales  ",
                repeticiones: 0,
                opciones: [
                    { /// Opcion para el minijuego de disparos
                        interaccion: "Ese número lo anote en la bodega pero tenemos un problema de plagas, me ayudarias con eso?",
                        aceptacion: "listo, vamos para alla",
                        cancelacion: "Vale, pero no podre darte el número",
                        fallo: "Lastima, la pared quedo manchada",
                        probable: "Mira, aqui esta el número, gracias por todo",
                        improbable: "Era el de mi novia, que pena, lo siento"
                    },
                    {
                        interaccion: "Suele dejar cosas por aquí, tal vez el número, entramos para mirar?",
                        aceptacion: "Miremos donde estará",
                        cancelacion: "Bueno tu veras ",
                        fallo: "Parece que no era el lugar adecuado ",
                        probable: "listo, aqui esta",
                        improbable: "Mmm no parece estar, que pena"
                    },
                    {
                        interaccion: "Tengo el número anotado en el papel higiénico  pero esto es más urgente, ¿me ayudas?",
                        aceptacion: "listo, lo que tienes que hacer es muy sencillo",
                        cancelacion: "No ayuda, no número",
                        fallo: "Oh no, los patitos se lo llevaron ",
                        probable: "Aquí esta anotado, como te lo prometí",
                        improbable: "Mmm, no debí usarlo ."
                    },
                    {
                        interaccion: "El señor Miyato los llama todo el tiempo ¿podrías ayudarme?",
                        aceptacion: "Gracias, ven",
                        cancelacion: "…., pues no te compartirá nada",
                        fallo: "Noo, lastima el señor miyato lo sabia  ",
                        probable: "El señor Miyato es generoso , toma aquí tienes ",
                        improbable: "Que mal, parece que es un muñeco    "
                    }
                ]
            },
            {
                texto: "Tapa las fugas de todas las tuberías ",
                repeticiones: 0,
                opciones: [
                    { /// Opcion para el minijuego de disparos
                        interaccion: "Te puedo ayudar en cuento acabe con esta plaga, me ayudarias con eso?",
                        aceptacion: "listo, vamos para alla",
                        cancelacion: "Vale, pero tengo tiempo",
                        fallo: "Lastima, no puedo ayudarte",
                        probable: "Parece que las tuberías están en perfecto estado ",
                        improbable: "Parece que las tuberías reventaron, esto es malo"
                    },
                    {
                        interaccion: "Pero miremos primero las de acá, entramos para mirar?",
                        aceptacion: "Miremos como esta",
                        cancelacion: "Bueno tu veras ",
                        fallo: "Todos los alimentos se salpicaron, esto es malo",
                        probable: "Listo ya las arregle todas ",
                        improbable: "Es mucho trabajo creo que te dejare solo"
                    },
                    {
                        interaccion: "Ese problema se soluciona acá, ¿me ayudas?",
                        aceptacion: "listo, lo que tienes que hacer es muy sencillo",
                        cancelacion: "Como quieras ",
                        fallo: "Oh no, los patitos se metieron a las tuberías, tendremos que llamar a la policía  ",
                        probable: "Aquí estaba el origen del problema, todo solucionado",
                        improbable: "Parece que no se puede solucionar ."
                    },
                    {
                        interaccion: "Pídamele ayuda al señor Miyato  ¿podrías ayudarme?",
                        aceptacion: "Gracias, ven",
                        cancelacion: "…., pues no te ayudara nada",
                        fallo: "Noo, lastima el señor miyato es experto en tuberías   ",
                        probable: "El señor Miyato es generoso , y lo hará todo   ",
                        improbable: "Que mal, parece que es un muñeco    "
                    }
                ]
            },
            {
                texto: "Busca el enlace de la página de la empresa ",
                repeticiones: 0,
                opciones: [
                    { /// Opcion para el minijuego de disparos
                        interaccion: "Ese enlace lo anote en la bodega pero tenemos un problema de plagas, me ayudarias con eso?",
                        aceptacion: "listo, vamos para alla",
                        cancelacion: "Vale, pero no podre darte el enlace",
                        fallo: "Lastima, la compu quedo manchada",
                        probable: "Mira, aqui esta el enlace, gracias por todo",
                        improbable: "Era el de mi videos de gatos, que pena, lo siento"
                    },
                    {
                        interaccion: "Suelen dejar cosas por aquí, tal vez el enlace, entramos para mirar?",
                        aceptacion: "Miremos donde estará",
                        cancelacion: "Bueno tu veras ",
                        fallo: "Parece que no era el lugar adecuado ",
                        probable: "listo, aqui esta",
                        improbable: "Mmm no parece estar, que pena"
                    },
                    {
                        interaccion: "Tengo el enlace anotado en mi celular pero esto es más urgente, ¿me ayudas?",
                        aceptacion: "listo, lo que tienes que hacer es muy sencillo",
                        cancelacion: "No ayuda, no enlace",
                        fallo: "Oh no, los patitos se lo llevaron ",
                        probable: "Aquí esta anotado, como te lo prometí",
                        improbable: "Mmm, no debí formatearlo ."
                    },
                    {
                        interaccion: "El señor Miyato sabe cómo usar la computadora ¿podrías ayudarme?",
                        aceptacion: "Gracias, ven",
                        cancelacion: "…., pues no te compartirá nada",
                        fallo: "Noo, lastima el señor miyato lo sabia  ",
                        probable: "El señor Miyato es generoso , toma aquí tienes ",
                        improbable: "Que mal, parece que es un muñeco    "
                    }
                ]
            }
        ]
    };
    return junior;
}
