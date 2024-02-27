import Button from "./Button";

export default{
    title:"Atoms/Button",
    component: Button,
    args:{
        children: "button text",
    }
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
