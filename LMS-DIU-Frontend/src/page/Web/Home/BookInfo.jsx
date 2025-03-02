import React, { useState } from 'react';
import { Collapse, Select } from 'antd';

const { Option } = Select;

const BookInfo = () => {
    // State to manage the position of the expand icon
    const [expandIconPosition, setExpandIconPosition] = useState('start');

    // Sample data for Collapse items
    const items = [
        {
            key: '1',
            label: 'Chapter 1',
            children: <p>Details about Chapter 1</p>,
        },
        {
            key: '2',
            label: 'Chapter 2',
            children: <p>Details about Chapter 2</p>,
        },
    ];

    // Handle the change in the expand icon position
    const onPositionChange = (value) => {
        setExpandIconPosition(value);
    };

    // Handle the change in the Collapse component (optional for your case)
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className='contianer'>
            <h1 className='text-3xl text-center text-secondary my-10'>Book Info</h1>

            <div className=' grid grid-cols-3 gap-x-5 gap-y-10  my-10'>
                <div className=''>
                    <h1 className='text-xl  text-secondary mb-3'>Book PDF</h1>
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                        items={items}
                    />
                </div>

                <div className=''>
                    <h1 className='text-xl  text-secondary mb-3'>Class Test</h1>
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                        items={items}
                    />
                </div>

                <div className=''>
                    <h1 className='text-xl  text-secondary mb-3'>Assignment + Topic</h1>
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                        items={items}
                    />
                </div>

                <div className=''>
                    <h1 className='text-xl  text-secondary mb-3'>Online Class Info</h1>
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                        items={items}
                    />
                </div>

                <div className=''>
                    <h1 className='text-xl  text-secondary mb-3'>Mid Exam Suggestion</h1>
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                        items={items}
                    />
                </div>

                <div className=''>
                    <h1 className='text-xl  text-secondary mb-3'>Final Exam Suggestion</h1>
                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                        items={items}
                    />
                </div>

            </div>
        </div>
    );
}

export default BookInfo;
