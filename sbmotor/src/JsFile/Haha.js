import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react';
import { Space, Table, Tag,Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

export default function Haha() {
  const [customerInfo, setCustomerInfo] = useState([]);
 

  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => {
        setCustomerInfo(res.data);
     
      })
      .catch(err => console.log(err));
  }, []);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'ID',
      dataIndex: 'Id',
      key: 'Id',

      ...getColumnSearchProps('Id'),
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
  
      ...getColumnSearchProps('Name'),
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',

      ...getColumnSearchProps('Phone'),
    },
    {
      title: 'Action',
      dataIndex: 'Id',
      key: 'Id',
      render: (text, record) => (
        
          <a href={'admin/'+record.Id}><Button type="primary" >View</Button></a>
        
      ),
    },
    // {
    //   title: 'Address',
    //   dataIndex: 'Home_Address',
    //   key: 'Home_Address',
    //   ...getColumnSearchProps('Home_Address'),
    //   // sorter: (a, b) => a.Home_Address.length - b.Home_Address.length,
    //   // sortDirections: ['descend', 'ascend'],
    // },
    // {
    //   title: 'Email',
    //   dataIndex: 'Email',
    //   key: 'Email',

    //   ...getColumnSearchProps('Email'),
    // },
    // {
    //   title: 'Bank Acc',
    //   dataIndex: 'Bank_acc',
    //   key: 'Bank_acc',

    //   ...getColumnSearchProps('Bank_acc'),
    // },
    // {
    //   title: 'Bank Name',
    //   dataIndex: 'Bank_Name',
    //   key: 'Bank_Name',

    //   ...getColumnSearchProps('Bank_Name'),
    // }
    
  ];
  return (
    <div>
      <Table  columns={columns} dataSource={customerInfo} />
      
    </div>
  );
}
