import Discount from "./Discount";

export default{
    title:"Atoms/Discount",
    component: Discount,
    args:{
        children: "discount text",
    }
}

const Template = (args) => <Discount {...args}/>

export const Default = Template.bind({})
