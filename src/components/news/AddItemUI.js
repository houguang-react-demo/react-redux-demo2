import React from 'react';
import {ModalForm, ProFormText, ProFormTextArea} from '@ant-design/pro-form';
import {connect} from "react-redux";

const AddItem = (props) => {
    const {show_add_item,onFinish,onSubmit,formRef,inputChange} = props
    return (
        <ModalForm
            visible={show_add_item}
            title="新建表单"
            submitter={{
                onSubmit:onSubmit
            }}
            onFinish={onFinish}
            formRef={formRef}
            layout="horizontal"
            labelCol={{span: 4}}
        >
            <ProFormText
                width="md"
                name="title"
                label="标题"
                placeholder="请输入标题"
                onChange={inputChange}
            />

            <ProFormTextArea
                width="md"
                name="description"
                label="描述"
                placeholder="请输入描述"
                showCount="true"
                onChange={inputChange}
            />
        </ModalForm>
    );
};

const stateToProps = (state) => {
  return state
}

const dispatchToProps = dispatch=>{
    return {
        showAddItem(){
            dispatch({type:"show_add_item",payload:{}})
        },
        formRef(data){
            console.log(data)
        },
        inputChange(e){
            console.log(e.target.id,e.target.value)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(AddItem)