import React, { useEffect, useState } from 'react'
import { Card, Button, Form, Input, Flex,Divider,message } from 'antd';

import axios from 'axios';
export default function SubmitForm() {


    const { TextArea } = Input;
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [CustomerInfo, SetCustomerInfo] = useState(true)
    const [OccupationalDetails, SetOccupationalDetails] = useState(false)
    const [EmergencyContact, SetEmergencyContact] = useState(false)
    const [Finish, SetFinish] = useState(false)
    const [StatusSubmit,SetStatusSubmit] = useState(false)




    const [Name, SetName] = useState('')
    const [Phone, SetPhone] = useState('')
    const [HomeAddress, SetHomeAddress] = useState('')
    const [Email, SetEmail] = useState('')
    const [BankAcc, SetBankAcc] = useState('')
    const [BankName, SetBankName] = useState('')

    const [CompanyName, SetCompanyName] = useState('')
    const [CompanyPhone, SetCompanyPhone] = useState('')
    const [CompanyAddress, SetCompanyAddress] = useState('')
    const [Employmentperiod, SetEmploymentperiod] = useState('')

    const [Name1, SetName1] = useState('')
    const [Phone1, SetPhone1] = useState('')
    const [Address1, SetAddress1] = useState('')
    const [Name2, SetName2] = useState('')
    const [Phone2, SetPhone2] = useState('')
    const [Address2, SetAddress2] = useState('')
    const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully submitted',
    });
  };

  const handleDownload = () => {
    // 获取当前页面的 HTML 内容
    const htmlContent = document.documentElement.outerHTML;

    // 创建 Blob 对象
    const blob = new Blob([htmlContent], { type: 'text/html' });

    // 创建下载链接
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'page.html';

    // 触发点击下载链接
    downloadLink.click();
  };




    const [step1Style, setStep1Style] = useState({
        fontWeight: 'bold',
    });
    const [step2Style, setStep2Style] = useState({
        fontWeight: 'normal',
    });
    const [step3Style, setStep3Style] = useState({
        fontWeight: 'normal',
    });
    const [step4Style, setStep4Style] = useState({
        fontWeight: 'normal',
    });








    return (
        <div >

            <Card
                title={<Flex justify='center'>
                    <div>

                        <span style={{ fontWeight: step1Style.fontWeight }}>Step 1</span>
                        <span>{'>'}</span>
                        <span style={{ fontWeight: step2Style.fontWeight }}>Step 2</span>
                        <span>{'>'}</span>
                        <span style={{ fontWeight: step3Style.fontWeight }}>Step 3</span>
                        <span>{'>'}</span>
                        <span style={{ fontWeight: step4Style.fontWeight }}>Submit</span>

                    </div>
                </Flex>}
                headStyle={{ textAlign: 'center' }}
            >



                <Form
                    onFinish={(values) => {


                        SetCustomerInfo(false);
                        SetOccupationalDetails(true);
                        setStep1Style({ fontWeight: 'normal' });
                        setStep2Style({ fontWeight: 'bold' });

                    }}
                    onFinishFailed={onFinishFailed}
                
                >


                    {CustomerInfo && <Card title="Your Information" headStyle={{ textAlign: 'center' }}>
                       
                        <Form.Item
                            label="Name"
                            name="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input  onChange={e => SetName(e.target.value)} />
                            
                            
                        </Form.Item>
                      

                        <Form.Item
                            label="Phone"
                            name="Phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone number',
                                },
                            ]}
                        >
                            <Input onChange={e => SetPhone(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Home Address"
                            name="Home_Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Home Address',
                                },
                            ]}
                        >
                            <Input onChange={e => SetHomeAddress(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email Address',
                                },
                            ]}
                        >
                            <Input onChange={e => SetEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Bank Acc"
                            name="Bank_Acc"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Bank Acc',
                                },
                            ]}
                        >
                            <Input onChange={e => SetBankAcc(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Bank Name"
                            name="Bank_Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Bank Name',
                                },
                            ]}
                        >
                            <Input onChange={e => SetBankName(e.target.value)} />
                        </Form.Item>


                        <Flex justify='center'>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Comfirm & Next
                                </Button>
                            </Form.Item>
                        </Flex>



                    </Card>}
                </Form>







                <Form
                    onFinish={(values) => {
                        SetOccupationalDetails(false);
                        SetEmergencyContact(true);
                        setStep2Style({ fontWeight: 'normal' });
                        setStep3Style({ fontWeight: 'bold' });
                    }}
                    onFinishFailed={onFinishFailed}
                >

                    {OccupationalDetails && <Card title="Occupational details" headStyle={{ textAlign: 'center' }}>
                        <Form.Item
                            label="Company Name"
                            name="Company_Name"
                            rules={[
                                {

                                    message: 'Please input your Company Name!',
                                },
                            ]}
                        >
                            <Input onChange={e => SetCompanyName(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Company Phone"
                            name="Company_Phone"
                            rules={[
                                {
                                    
                                    message: 'Please input your Company Phone',
                                },
                            ]}
                        >
                            <Input onChange={e => SetCompanyPhone(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Company Address"
                            name="Company_Address"
                            rules={[
                                {

                                    message: 'Please input your Company Address',
                                },
                            ]}
                        >
                            <Input onChange={e => SetCompanyAddress(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Employment period"
                            name="Employment_period"
                            rules={[
                                {

                                    message: 'Please input your Employment period',
                                },
                            ]}
                        >
                            <Input onChange={e => SetEmploymentperiod(e.target.value)} />
                        </Form.Item>
                        <Flex justify='center'>
                            <Button type="primary" htmlType="submit">
                                Comfirm & Next
                            </Button>
                        </Flex>

                    </Card>}

                </Form>




                <Form
                    onFinish={(values) => {
                        SetEmergencyContact(false);
                        SetFinish(true)
                        setStep3Style({ fontWeight: 'normal' });
                        setStep4Style({ fontWeight: 'bold' });
                    }}
                    onFinishFailed={onFinishFailed}
                >

                    {EmergencyContact && <Card title="Emergency contact" headStyle={{ textAlign: 'center' }} >
                        <Form.Item
                            label="Name 1"
                            name="Emergency_contact_name1"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Emergency contact Name!',
                                },
                            ]}
                        >
                            <Input onChange={e => SetName1(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Phone 1"
                            name="Emergency_contact_Phone1"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Emergency contact Phone',
                                },
                            ]}
                        >
                            <Input onChange={e => SetPhone1(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Address 1"
                            name="Emergency_contact_Address1"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Emergency contact Address',
                                },
                            ]}
                        >
                            <Input onChange={e => SetAddress1(e.target.value)} />

                        </Form.Item>



                        <Form.Item
                            label="Name 2"
                            name="Emergency_contact_name2"
                            rules={[
                                {

                                    message: 'Please input your Emergency contact Name!',
                                },
                            ]}
                        >
                            <Input onChange={e => SetName2(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Phone 2"
                            name="Emergency_contact_Phone2"
                            rules={[
                                {

                                    message: 'Please input your Emergency contact Phone',
                                },
                            ]}
                        >
                            <Input onChange={e => SetPhone2(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Address 2"
                            name="Emergency_contact_Address2"
                            rules={[
                                {

                                    message: 'Please input your Emergency contact Address',
                                },
                            ]}
                        >
                            <Input onChange={e => SetAddress2(e.target.value)} />

                        </Form.Item>
                        <Flex justify='center'>
                            <Button type="primary" htmlType="submit">
                                Comfirm & Next
                            </Button>
                        </Flex>

                    </Card>}

                </Form>

                <Form
                    onFinish={(values) => {



                        axios.post('http://localhost:8081/create', { Name, Phone, HomeAddress, Email, BankAcc, BankName, CompanyName, CompanyPhone, CompanyAddress, Employmentperiod, Name1, Phone1, Address1, Name2, Phone2, Address2 })
                            .then(res => {
                                console.log(res.status);
                                if(res.status==200)
                                {
                                    SetStatusSubmit(true)
                                    
                                }


                            })
                            .catch(err => console.log(err));
                    }}
                    onFinishFailed={onFinishFailed}

                >

                    {Finish && <Card title="Your Information" extra={!StatusSubmit&&<a onClick={()=>{SetCustomerInfo(false);
                        SetCustomerInfo(true)
                        SetFinish(false)
                        setStep1Style({ fontWeight: 'bold' });
                        setStep4Style({ fontWeight: 'normal' });}}>Edit</a>} headStyle={{ textAlign: 'center' }} >


                        <div>
                            <div>
                                <div >



                                    <Flex align='center' justify='space-between'><h4>Name:</h4><Input value={Name} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Phone:</h4><Input value={Phone} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Address:</h4><TextArea rows={4} value={HomeAddress} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Email:</h4><TextArea rows={2} value={Email} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Bank Acc:</h4><Input value={BankAcc} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Bank Name:</h4><Input value={BankName} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>




                                </div>




                            </div>
                        </div>





                    </Card>}

                    <Divider/>

                    {Finish && <Card title="Occupational details" extra={!StatusSubmit&&<a onClick={()=>{SetCustomerInfo(false);
                        SetOccupationalDetails(true)
                        SetFinish(false)
                        setStep2Style({ fontWeight: 'bold' });
                        setStep4Style({ fontWeight: 'normal' });}}>Edit</a>} headStyle={{ textAlign: 'center' }} >


                        <div>
                            <div>
                                <div >



                                    <Flex align='center' justify='space-between'><h4>Company Name:</h4><Input value={CompanyName} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Company Phone:</h4><Input value={CompanyPhone} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Company Address:</h4><TextArea rows={4} value={CompanyAddress} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Employment period</h4><TextArea rows={2} value={Employmentperiod} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>





                                </div>




                            </div>
                        </div>

                    </Card>}

                    <Divider/>

                    {Finish && <Card title="Emergency Contact" extra={!StatusSubmit&&<a onClick={()=>{SetCustomerInfo(false);
                        SetEmergencyContact(true)
                        SetFinish(false)
                        setStep3Style({ fontWeight: 'bold' });
                        setStep4Style({ fontWeight: 'normal' });}}>Edit</a>} headStyle={{ textAlign: 'center' }} >


                        <div>
                            <div>
                                <div >



                                    <Flex align='center' justify='space-between'><h4>Name1:</h4><Input value={Name1} disabled bordered={false} style={{ width: '70%',color: 'inherit' }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Phone1:</h4><Input value={Phone1} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Address1:</h4><TextArea rows={4} value={Address1} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Name2:</h4><Input value={Name2} disabled bordered={false} style={{ width: '70%',color: 'inherit'  }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Phone2:</h4><Input value={Phone2} disabled bordered={false} style={{ width: '70%' ,color: 'inherit' }} /></Flex>
                                    <Flex align='center' justify='space-between'><h4>Address2</h4><TextArea rows={4} value={Address2} disabled bordered={false} style={{ width: '70%' ,color: 'inherit' }} /></Flex>





                                </div>




                            </div>
                        </div>

                        {contextHolder}
                        <Flex justify='center'>
                            {!StatusSubmit&&<Button onClick={success} style={{ backgroundColor: '#04AA6D', color: 'white' }} type="primary" htmlType="submit">
                                Comfirm & Submit
                            </Button>}
                           
                        </Flex>

                       {StatusSubmit&&<Flex justify='center'><Button type="primary" onClick={handleDownload}>Dowload</Button></Flex>}
                       {StatusSubmit&&<Flex justify='center'><h2 style={{ color: '#04AA6D' }}>You have successfully submitted the form</h2></Flex>}
                        
                        
                    </Card>}

                    


                </Form>








            </Card>

        </div>
    )
}
