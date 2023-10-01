import TextInput from "./TextInput";

export default {
    title : 'Components/TextInput',
    component : TextInput,
    argTypes : {
        type : {
            options:['text', 'password', 'email', 'date', 'tel', 'zip'],
            control:{ type : 'select' }

        }
    }

}

const Template = (args) => <TextInput {...args} />


export const Default = Template.bind({})
Default.args = {
    name: 'fname',
    label : 'First Name',
    placeholder : 'Enter First name'
}



export const Password = Template.bind({})
Password.args = {
    name: 'password',
    label : 'Password',
    type : 'password',
    placeholder : 'Enter your pass'
}


export const Address = Template.bind({})
Address.args = {
    name: 'addressline1',
    label : 'Address Line',
    placeholder : 'Enter your Address'
}
