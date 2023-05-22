import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pestana2',
  templateUrl: './pestana2.component.html',
  styleUrls: ['./pestana2.component.css']
})
export class Pestana2Component {

 
    rutaImagenes = 'imagenes/';

  monumentos = [
    {
      nombre: 'Torre de Londres (Tower of London)',
      imagen: "torre-londres.jpg",
      descripcion:
        'La Torre de Londres es una emblemática fortaleza histórica situada a orillas del río Támesis. Construida en el siglo XI, ha cumplido diversos roles a lo largo de la historia, desde palacio real hasta prisión. Hoy en día, alberga las Joyas de la Corona y es una popular atracción turística que ofrece fascinantes tours y exhibiciones sobre su oscuro pasado.',
      enlace: 'https://es.wikipedia.org/wiki/Torre_de_Londres',
    },
    {
      nombre: 'Puente de la Torre (Tower Bridge)',
      imagen: "tower-bridge.jpg",
      descripcion:
        'El Puente de la Torre, también conocido como Tower Bridge, es uno de los símbolos más reconocibles de Londres. Inaugurado en 1894, es un puente levadizo de estilo victoriano que cruza el río Támesis. Su diseño distintivo, con torres gemelas y un paso elevado, combina ingeniería y estética, ofreciendo vistas panorámicas de la ciudad desde su pasarela superior.',
      enlace: 'https://es.wikipedia.org/wiki/Puente_de_la_Torre',
    },
    {
      nombre: 'Palacio de Buckingham (Buckingham Palace)',
      imagen: "buckingham-palace.jpg",
      descripcion:
        'El Palacio de Buckingham es la residencia oficial de la monarquía británica en Londres. Construido en 1703, cuenta con 775 habitaciones y es conocido por su icónica fachada neoclásica. El cambio de guardia frente al palacio es un popular espectáculo turístico. Sin embargo, solo la parte este del palacio está abierta al público en determinados períodos del año.',
      enlace: 'https://es.wikipedia.org/wiki/Palacio_de_Buckingham',
    },
    {
      nombre: 'Abadía de Westminster (Westminster Abbey)',
      imagen: "abadia-westmister.jpg",
      descripcion: 'La Abadía de Westminster es una joya arquitectónica y religiosa en Londres. Construida en el siglo XIII, ha sido el lugar de coronaciones y bodas reales. Es el sitio de descanso final de numerosos monarcas y figuras históricas. Su arquitectura gótica, vitrales impresionantes y la famosa Poets Corner la convierten en una visita obligada para los amantes de la historia y la cultura.',
      enlace: 'https://es.wikipedia.org/wiki/Abad%C3%ADa_de_Westminster',
    },
    {
      nombre: 'Big Ben (torre del reloj del Palacio de Westminster)',
      imagen: "big-ben.jpg",
      descripcion: 'El Big Ben es el nombre que se le da popularmente a la Gran Campana del Reloj situada en la torre del reloj del Palacio de Westminster en Londres. Es uno de los íconos más reconocibles de la ciudad y una referencia mundial para indicar la hora exacta. La torre del reloj, oficialmente llamada Elizabeth Tower, es parte integral del patrimonio de Londres y ha sido testigo de eventos históricos significativos.',
      enlace: 'https://es.wikipedia.org/wiki/Big_Ben',
    },
    {
      nombre: 'London Eye (Ojo de Londres)',
      imagen: "london-eye.jpg",
      descripcion: 'El London Eye, conocido oficialmente como la Coca-Cola London Eye, es una famosa noria de observación situada en el South Bank del río Támesis. Inaugurada en 2000, es una de las atracciones más populares de Londres. Con 135 metros de altura, ofrece vistas panorámicas impresionantes de la ciudad y es un símbolo icónico de la capital británica.',
      enlace: 'https://es.wikipedia.org/wiki/London_Eye',
    },
    {
      nombre: "Catedral de San Pablo (St. Paul's Cathedral)",
      imagen: "San-pablo.jpg",
      descripcion: 'La Catedral de San Pablo es una majestuosa iglesia anglicana ubicada en Londres. Construida entre los siglos XVII y XVIII, su imponente cúpula es una de las más grandes del mundo. Conocida por su arquitectura barroca, ha sido escenario de eventos históricos y funerales de renombre, y ofrece vistas panorámicas desde su galería de la cúpula.',
      enlace: 'https://es.wikipedia.org/wiki/Catedral_de_San_Pablo_de_Londres',
    },
    {
      nombre: 'Trafalgar Square',
      imagen: "trafalgar-square.jpeg",
      descripcion: 'Trafalgar Square es una icónica plaza en el corazón de Londres. Construida en 1840, está dominada por la Columna de Nelson, en honor al almirante Nelson. Rodeada de majestuosos edificios y famosos leones de bronce, la plaza alberga eventos, celebraciones y manifestaciones, siendo uno de los puntos de encuentro más emblemáticos de la ciudad.',
      enlace: 'https://es.wikipedia.org/wiki/Trafalgar_Square',
    },
    {
      nombre: 'Puente de Waterloo (Waterloo Bridge)',
      imagen: "puente-waterloo.jpg",
      descripcion: 'El puente de Waterloo, ubicado en Londres, es un icónico puente ferroviario y peatonal que atraviesa el río Támesis. Construido en 1844, mide aproximadamente 380 metros de largo y es famoso por su diseño y vistas panorámicas de la ciudad. Es un importante símbolo histórico y turístico de la capital británica.',
      enlace: 'https://es.wikipedia.org/wiki/Puente_de_Waterloo',
    },
    {
      nombre: 'Museo Británico (British Museum)',
      imagen: "museo-britanico.jpg",
      descripcion: 'El Museo Británico, situado en Londres, es uno de los museos más famosos y visitados del mundo. Fundado en 1753, alberga una vasta colección de artefactos históricos y culturales de diversas civilizaciones, abarcando desde la antigüedad hasta la actualidad. Sus galerías exhiben tesoros como la Piedra de Rosetta y los frisos del Partenón, entre otros.',
      enlace: 'https://es.wikipedia.org/wiki/Museo_Brit%C3%A1nico',
    },
    {
      nombre: 'Museo de Historia Natural (Natural History Museum)',
      imagen: "museo-historia.jpg",
      descripcion: 'El Museo de Historia Natural, ubicado en Londres, es uno de los principales museos del mundo dedicado a la historia natural y la biodiversidad. Fundado en 1881, alberga una extensa colección de especímenes, fósiles y artefactos, incluyendo el famoso esqueleto de un diplodocus y la icónica sala de dinosaurios. Es un lugar fascinante para aprender sobre la evolución, la vida animal y la geología.',
      enlace: 'https://es.wikipedia.org/wiki/Museo_de_Historia_Natural_(Londres)',
    },
    {
      nombre: 'Puente de Londres (London Bridge)',
      imagen: "london-bridge.jpg",
      descripcion: 'El Puente de Londres, construido en 1894, cruza el río Támesis en el corazón de la ciudad. Es un emblemático puente levadizo de estilo victoriano, reconocido por sus torres y su arquitectura distintiva. Es un importante símbolo de la capital británica y ofrece impresionantes vistas del río y de otros monumentos cercanos, como la Torre de Londres.',
      enlace: 'https://es.wikipedia.org/wiki/Puente_de_Londres',
    },
    {
      nombre: 'Parlamento del Reino Unido (Palacio de Westminster)',
      imagen: "palacio-westmister.jpg",
      descripcion: 'El Parlamento del Reino Unido, ubicado en el Palacio de Westminster en Londres, es el órgano legislativo supremo del país. Construido en el siglo XIX, es reconocido por su emblemática Torre del Reloj, conocida como el Big Ben. El Parlamento alberga las Cámaras del Parlamento, la Cámara de los Comunes y la Cámara de los Lores, donde se debaten y aprueban las leyes. Es un importante símbolo de la democracia británica y una atracción turística popular.',
      enlace: 'https://es.wikipedia.org/wiki/Parlamento_del_Reino_Unido',
    },
    {
      nombre: 'Piccadilly Circus',
      imagen: "picadilly-circus.jpg",
      descripcion: 'Piccadilly Circus es una famosa plaza en el corazón de Londres, conocida por sus icónicos letreros luminosos y su bullicio constante. Es un importante centro de transporte y punto de encuentro para locales y turistas. Rodeada de teatros, tiendas y restaurantes, es un lugar vibrante y emblemático de la vida urbana londinense.',
      enlace: 'https://es.wikipedia.org/wiki/Piccadilly_Circus',
    },
    {
      nombre: 'Hyde Park',
      imagen: "hide-park.jpg",
      descripcion: 'Hyde Park, ubicado en el centro de Londres, es uno de los parques más grandes de la ciudad. Con una extensión de más de 140 hectáreas, ofrece vastos espacios verdes, lagos serenos y áreas de recreación. Es un lugar popular para pasear, hacer picnics, montar en bicicleta y disfrutar de eventos culturales. Además, alberga monumentos emblemáticos como el Speakers Corner y el Serpentine Gallery.',
      enlace: 'https://es.wikipedia.org/wiki/Hyde_Park',
    },
    {
      nombre: 'Palacio de Kensington (Kensington Palace)',
      imagen: "kensington-palace.jpg",
      descripcion: 'El Palacio de Kensington, situado en Londres, es una residencia real histórica que ha sido hogar de varios miembros de la familia real británica. Actualmente, es la residencia oficial del Duque y la Duquesa de Cambridge. El palacio cuenta con hermosos jardines, la Galería de Retratos y exhibiciones sobre la vida de la Princesa Diana. Es un lugar emblemático de la monarquía británica y una atracción turística destacada.',
      enlace: 'https://es.wikipedia.org/wiki/Palacio_de_Kensington',
    },
    {
      nombre: "Regent's Park",
      imagen: "regents-park.jpg",
      descripcion: 'Regents Park, ubicado en el centro de Londres, es uno de los parques reales más grandes y hermosos de la ciudad. Con extensas áreas verdes, jardines bien cuidados y un lago sereno, es un lugar ideal para relajarse, hacer picnic, practicar deportes al aire libre y disfrutar de la naturaleza. También alberga el famoso zoológico de Londres y el Open Air Theatre. Es un refugio tranquilo en medio del bullicio de la ciudad.',
      enlace: "https://es.wikipedia.org/wiki/Regent%27s_Park",
    },
    {
      nombre: 'Marble Arch',
      imagen: "marble-arch.jpg",
      descripcion: 'Marble Arch es una imponente estructura de arco de mármol blanco situada en el extremo norte de Park Lane, en Londres. Fue diseñado en 1827 como la entrada ceremonial a Buckingham Palace. Ahora se encuentra en el cruce de Oxford Street y Edgware Road, y es un hito icónico y punto de referencia para la ciudad.',
      enlace: 'https://es.wikipedia.org/wiki/Marble_Arch',
    },
    {
      nombre:
        'Monumento al Gran Incendio de Londres (Monument to the Great Fire of London)',
      imagen: "monumento-incendio.jpg",
      descripcion: 'El Monumento al Gran Incendio de Londres es una columna de piedra de 61 metros de altura ubicada cerca de la Catedral de San Pablo. Fue construido en 1677 para conmemorar el devastador incendio de 1666. Los visitantes pueden subir a la cima para disfrutar de vistas panorámicas de la ciudad. Es un recordatorio histórico y un símbolo de la resiliencia de Londres.',
      enlace: 'https://es.wikipedia.org/wiki/Monumento_al_gran_incendio_de_Londres',
    },
    {
      nombre:
        'Greenwich y el Meridiano de Greenwich (Greenwich and the Greenwich Meridian)',
      imagen: "greenwich.jpg",
      descripcion: 'Greenwich es un histórico distrito de Londres conocido por su importancia en la navegación y la medición del tiempo. Alberga el Real Observatorio de Greenwich, donde se encuentra el Meridiano de Greenwich, punto de referencia para establecer la longitud cero del mundo. Además, Greenwich cuenta con hermosos parques, el Cutty Sark y el Museo Marítimo Nacional, siendo declarado Patrimonio de la Humanidad por la UNESCO.',
      enlace: 'https://es.wikipedia.org/wiki/Real_Observatorio_de_Greenwich',
    },

    {
      nombre: 'Puente del Milenio (Millennium Bridge)',
      imagen: "milenium-bridge.jpg",
      descripcion: 'El Puente del Milenio, situado en Londres, es un puente peatonal que cruza el río Támesis. Inaugurado en el año 2000, se caracteriza por su diseño moderno y curvilíneo. Es un lugar popular para pasear y disfrutar de vistas panorámicas de la ciudad, conectando la Catedral de San Pablo con el barrio de Bankside y el Tate Modern.',
      enlace: 'https://es.wikipedia.org/wiki/Millennium_Bridge',
    },

    {
      nombre: 'Somerset House',
      imagen: "somerset-house.jpg",
      descripcion: 'Somerset House es un magnífico edificio neoclásico ubicado en Londres, cerca del río Támesis. Construido en el siglo XVIII, alberga una amplia gama de actividades culturales, incluyendo exposiciones de arte, conciertos, eventos de moda y más. También cuenta con hermosos patios interiores, fuentes y espacios para disfrutar al aire libre. Es un centro cultural emblemático de la ciudad.',
      enlace: 'https://es.wikipedia.org/wiki/Somerset_House',
    },
    {
      nombre: 'Royal Albert Hall',
      imagen: "royal-albert.jpg",
      descripcion: 'El Royal Albert Hall, situado en Londres, es una icónica sala de conciertos y recinto multifuncional. Inaugurado en 1871, es famoso por su arquitectura y acústica excepcionales. Es sede de diversos eventos, desde conciertos de música clásica y ópera hasta ceremonias de premios y espectáculos populares. Es un lugar emblemático para disfrutar de actuaciones artísticas de renombre mundial.',
      enlace: 'https://es.wikipedia.org/wiki/Royal_Albert_Hall',
    },
    {
      nombre: 'Globe Theatre',
      imagen: "globe-theater.jpg",
      descripcion: 'El Globe Theatre, ubicado en Londres, es una reconstrucción del famoso teatro isabelino donde se representaron las obras de William Shakespeare. Construido en 1997, mantiene la arquitectura y el ambiente de la época. Ofrece producciones teatrales de Shakespeare y es un destino popular para los amantes del teatro y la historia literaria.',
      enlace: 'https://es.wikipedia.org/wiki/The_Globe',
    },
    {
      nombre: 'Palacio de Westminster (Houses of Parliament)',
      imagen: "palacio-westmister.jpg",
      descripcion: 'El Palacio de Westminster, ubicado en Londres, es el emblemático edificio que alberga el Parlamento del Reino Unido. Con su impresionante arquitectura gótica y la icónica torre del Big Ben, es uno de los símbolos más reconocibles de la ciudad. Es un centro político y un importante destino turístico que ofrece visitas guiadas y la oportunidad de presenciar debates parlamentarios.',
      enlace: 'https://es.wikipedia.org/wiki/Palacio_de_Westminster',
    },
    {
      nombre: 'Museo de la Guerra Imperial (Imperial War Museum)',
      imagen: "imperial-war-museum.jpg",
      descripcion: 'El Imperial War Museum (Museo Imperial de la Guerra) en Londres es un museo dedicado a la historia y el impacto de los conflictos modernos en la sociedad. Exhibe una amplia colección de artefactos, documentos y testimonios relacionados con la guerra.',
      enlace: '',
    },
    {
      nombre: 'Puerta de los Leones (Lions Gate)',
      imagen: "lions-gate.jpg",
      descripcion: 'La Puerta de los Leones es una leyenda que relaciona a los leones de Trafalgar Square con el Big Ben en Londres. Según la leyenda, si el Big Ben sonara 13 veces, los leones cobrarían vida y comenzarían a dar vueltas alrededor de la columna Nelson ',
      enlace: 'https://es.wikipedia.org/wiki/Museo_Imperial_de_la_Guerra',
    },
    {
      nombre: "Nelson's Column (Columna de Nelson) en Trafalgar Square",
      imagen: "columna-nelson.jpg",
      descripcion: 'La columna de Nelson es un monumento situado en Trafalgar Square, Londres, Inglaterra, en homenaje a Horatio Nelson, almirante británico fallecido en el transcurso de la batalla de Trafalgar. La columna se erigió entre 1840 y 1843 para conmemorar la muerte del almirante. La estatua mide 5,5 metros y se yergue sobre una columna de granito de 46 metros de altura.',
      enlace: 'https://es.wikipedia.org/wiki/Columna_de_Nelson',
    },
    {
      nombre: 'Leadenhall Market',
      imagen: "leadenhall-market.jpg",
      descripcion: 'Este mercado cubierto, ubicado en el distrito financiero de Londres, data del siglo XIV. Aunque no es un monumento en el sentido tradicional, su arquitectura victoriana y estilo medieval lo convierten en un lugar encantador y único para visitar, con una amplia variedad de tiendas y restaurantes.',
      enlace: 'https://es.wikipedia.org/wiki/Leadenhall_Market',
    },
    {
      nombre: 'Faro de Trinity Buoy Wharf',
      imagen: "faro-trinity.jpg",
      descripcion: 'Situado en la orilla del río Támesis, este faro es el más pequeño de Inglaterra y ofrece una vista única de la ciudad. Además del faro, la zona de Trinity Buoy Wharf alberga una comunidad de artistas, estudios de arte y esculturas peculiares, convirtiéndola en un lugar creativo y sorprendente para explorar.',
      enlace: 'https://en.wikipedia.org/wiki/Trinity_Buoy_Wharf',
    },
  ];

  

  
}