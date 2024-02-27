import Image from "./Image";

export default{
    title:"Atoms/Image",
    component: Image,
    args:{
        src: "",
        alt:""
    }
}

const Template = (args) => <Image {...args}/>

export const Image01 = Template.bind({})
Image01.args = {
  src: "https://cdn-pe.comparabien.com/styles/webp/s3/2023-10/2022_oct_seguros-salud-min.jpg.webp?VersionId=F_ZMtHppPm1mlb3ND9mbJ.GiYAn0TjFo&itok=NGZsVtjc",
  alt: "seguro de salud"
};

export const Image02 = Template.bind({})
Image02.args = {
  src: "https://www.apeseg.org.pe/wp-content/uploads/2021/11/GettyImages-1246800138.jpg",
  alt: "Seguro Vehicular"
};

export const Image03 = Template.bind({})
Image03.args = {
  src: "https://www.rimac.com/ventadigital/soat/assets/rebrand/coverage/img-coverage-mob.jpg",
  alt: "SOAT"
};

export const Image04 = Template.bind({})
Image04.args = {
  src: "https://www.mapfre.com.pe/media/Consejos-financieros-para-la-educacion-superior-de-tus-hijos-1080x550.jpg",
  alt: "Vida Ahorro con Devolución"
};
