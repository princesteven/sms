import React, {useState} from 'react';
import {schools} from "../../../db/schools";
import {AutoComplete, Button, Table} from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import {useAvailableApplicationsColumns} from "../../../lib/hooks";
import {availableApplications} from "../../../db/available-applications";

/**
 * @function
 * @name SearchSchool
 * @description Component to search and display the schools
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const SearchSchool = () => {
    const [value, setValue] = useState('');
    const columns = useAvailableApplicationsColumns();
    const [selectedId, setSelectedId] = useState<number>();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const onSearch = (searchText: string) => {
        const options = schools
            .filter(school => school.name.toLowerCase().includes(searchText.toLowerCase()))
            .map(option => {
                return {
                    value: option.name
                }
            })
        setOptions(options)
    };

    const handleSelect = (data: string) => {
        console.log('the data', data)
        setValue(data)
    };

    const handleSearch = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setVisible(true)
        }, 500)
    }

    return (
        <div className={"space-y-4"}>
            <div className="space-x-3">
                <AutoComplete
                    options={options}
                    style={{width: 200}}
                    onSelect={handleSelect}
                    onSearch={onSearch}
                    placeholder="input here"
                />
                <Button type={"primary"} icon={<SearchOutlined/>} loading={loading} onClick={handleSearch}>
                    Search
                </Button>
            </div>
            {
                visible && value && <div className={"space-y-4"}>
                    <div className="text-center font-semibold text-xl">{value} Application(s)</div>
                    <Table
                        loading={loading}
                        dataSource={availableApplications}
                        columns={columns}
                        rowKey={"id"}
                        rowClassName={(record) => `${selectedId === record.id && 'bg-gray-200'}`}
                        onRow={(record) => {
                            return {
                                onClick: () => setSelectedId(record.id)
                            }
                        }}
                    />
                </div>
            }
        </div>
    )
};

export default SearchSchool;