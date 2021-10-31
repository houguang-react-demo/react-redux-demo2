import React from 'react';
import {Button} from 'antd';
import ProList from '@ant-design/pro-list';
import '@ant-design/pro-list/dist/list.css';
import 'antd/dist/antd.css'
import {connect} from "react-redux";
import AddItem from "./AddItemUI";

const ListUI = (props) => {
    const {list,deleteItem,headerTitle,loading,showAddItem} = props
    return (
        <>
            <AddItem/>
            <ProList
                toolBarRender={() => {
                    return [
                        <Button key="add" type="primary" onClick={showAddItem}>
                            新建
                        </Button>,
                    ];
                }}
                headerTitle={headerTitle}
                dataSource={list}
                loading={loading}
                metas={{
                    title: {
                        dataIndex: 'title',
                    },
                    avatar: {
                        dataIndex: 'avatar',
                    },
                    description: {
                        dataIndex: 'description',
                    },
                    actions: {
                        render: (text, row,index) => [
                            <Button type="danger" key={index} onClick={()=>deleteItem(index)}>删除</Button>
                        ],
                    },
                }}
            />
        </>

    )
};

const stateToProps = state=>{
    return {
        headerTitle:"新闻列表",
        ...state
    }
}
const dispatchToProps = dispatch=>{
    return {
        deleteItem(index){
            dispatch({type:"delete_item",payload:{index}})
        },
        showAddItem(){
            dispatch({type:"show_add_item",payload:{}})
        }
    }
}

export default connect(stateToProps,dispatchToProps)(ListUI)