import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Card, Divider, Flex, Input } from 'antd';
export default function CustomerDetails() {

    const [customerInfo, setCustomerInfo] = useState([]);
    const { id } = useParams();
    const { TextArea } = Input;




    useEffect(() => {
        axios.get('http://localhost:8081/admin/' + id)
            .then(res => {
                setCustomerInfo(res.data);
                console.log(res.data)

            })
            .catch(err => console.log(err));
    }, []);
    return (


        <div>
            <Card title={<h2>Customer Information</h2>} >
                <div >
                    <Flex align='center' justify='space-between'><h4>Name:</h4><Input value={customerInfo[0]?.Name ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Phone:</h4><Input value={customerInfo[0]?.Phone ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Address:</h4><TextArea rows={4} value={customerInfo[0]?.Home_Address ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Email:</h4><TextArea rows={2} value={customerInfo[0]?.Email ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Bank Acc:</h4><Input value={customerInfo[0]?.Bank_acc ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Bank Name:</h4><Input value={customerInfo[0]?.Bank_Name ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>

                </div>
            </Card>

            <Divider/>

            <Card title={<h2>Occupational details</h2>} >
                <div >
                    <Flex align='center' justify='space-between'><h4>Company Name:</h4><Input value={customerInfo[0]?.Company_Name ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Company Phone:</h4><Input value={customerInfo[0]?.Company_Phone ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Company Address:</h4><TextArea rows={4} value={customerInfo[0]?.Company_Address ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Employment period</h4><TextArea rows={2} value={customerInfo[0]?.Employment_period ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                </div>
            </Card>

            <Divider/>

            <Card title={<h2>Emergency Contact</h2>} >
                <div >
                    <Flex align='center' justify='space-between'><h4>Name1:</h4><Input value={customerInfo[0]?.Name1 ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Phone1:</h4><Input value={customerInfo[0]?.Phone1 ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Address1:</h4><TextArea rows={4} value={customerInfo[0]?.Address1 ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Name2:</h4><Input value={customerInfo[0]?.Name2 ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Phone2:</h4><Input value={customerInfo[0]?.Phone2 ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                    <Flex align='center' justify='space-between'><h4>Address2</h4><TextArea rows={4} value={customerInfo[0]?.Address2 ?? ''} disabled bordered={false} style={{ width: '70%', color: 'inherit' }} /></Flex>
                </div>
            </Card>
        </div>
    )
}
