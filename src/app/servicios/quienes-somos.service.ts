import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QuienesSomosService {
    private contenido: string = `A partir del ASPO, los/as productores/as y artesanos/as de las organizaciones del Paseo de la Economía Social y Solidaria del Consejo Social de la Universidad Nacional de La Plata, decidieron retomar la modalidad de repartos a domicilio para poder seguir comercializando sus productos, a través de la comercializadora “El Paseo te lo lleva”, adecuándose así al contexto.

    Los pedidos se realizan principalmente por medio de un formulario web de Google Forms y a través de las redes sociales (WhatsApp, Instagram, Facebook y Mail).
    
    Dada la gran cantidad de tareas a realizar: toma de pedidos, publicidad, atención de cada una de las redes, apertura, cierre y edición del formulario on line, control de pedidos y stock, armado de pedidos, distribución de zonas de repartos, pago a los productores, seguimiento de los pedidos, atención de reclamos y consultas; se tuvo que incorporar más extensionistas y productores/as, de los/as que ya venían realizando varias de estas tareas. Cabe aclarar que antes estas tareas estaban a cargo de la coordinadora del Paseo, una o dos extensionistas y productoras. A su vez, se amplió el número de repartidores que permiten que se llegue no sólo a la ciudad de La Plata sino poder cubrir las demandas de pedidos de los municipios aledaños de Berisso y Ensenada.
    
    Cabe destacar que el sistema de repartos se puede llevar adelante gracias a contar con un espacio físico amplio (Centro Cultural, Científico, Político y Social Macacha Güemes) en el cual, se recepcionan los productos, se controlan y acopian para poder armar los pedidos de cada repartidor. Además, a partir de la flexibilización de las actividades en el marco del ASPO, se incorporó la posibilidad de que los/as consumidores/as puedan retirar sus pedidos en el Centro Cultural, inaugurando el nodo, atendido por los/as propios/as productores/as siguiendo las medidas estrictas de seguridad e higiene. Además, se amplió considerablemente la oferta de productos, armando combos que integren varios/as productores/as de diferentes rubros y organizaciones. También se realizaron lanzamientos especiales (como, por ejemplo: día del padre, día de la niñez, etc.). Por último, se ofrecieron amplias posibilidades de pago, ya no solo se pagaba en efectivo, sino que se incorporó la transferencia bancaria o el uso de tarjetas. Sobre este último punto es importante remarcar que previo al ASPO varios/as de los productores/as del Paseo estaban registrados/as como entidades de comercio en el programa Argentina Contra el Hambre, por lo que tuvieron acceso a posnets y aperturas de cuentas bancarias que fueron de gran utilidad para esta reconversión. Y de esta manera varias organizaciones lograron formalizar sus unidades productivas, registrándose como monotributistas sociales.
    
    Como resultado obtenido de este proceso, puede decirse que los pedidos se incrementaron considerablemente, llegando a ser entre 200 y 300 por semana. Los lazos solidarios se mantuvieron firmes, llegando a nuevos/as consumidores/as que no conocían esta modalidad de producción ni esta “otra economía” a la que definimos como Economía Popular, Social y Solidaria, generando un gran trabajo entre coordinadores/as, extensionistas y productores/as.
    `;

    getContenido(): string {
        return this.contenido;
    }

    setContenido(nuevoContenido: string) {
        this.contenido = nuevoContenido;
    }
}
