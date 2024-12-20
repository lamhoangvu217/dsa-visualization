import { Button, Card, Input, Modal, Space, Table, Typography } from 'antd';
import { useState } from "react";
import { useSelector } from 'react-redux';
import MainLayout from '../../common/Layouts/MainLayout';
const { Title } = Typography;
function SearchInsertPosition() {
  const selectedProblem = useSelector((state) => state.ProblemStore.selectedProblem);
  const [nums, setNums] = useState([1, 3, 5, 6]);
  const [target, setTarget] = useState(null);
  const [result, setResult] = useState(null);
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);

  const showModal = () => {
    setIsRequirementModalOpen(true);
  };
  const handleOk = () => {
    setIsRequirementModalOpen(false);
  };

  const handleCancel = () => {
    setIsRequirementModalOpen(false);
  };

  // Binary Search and Insert Logic
  const handleSearchInsert = () => {
    if (target === null) return;

    let left = 0;
    let right = nums.length - 1;
    let index = nums.length; // Default index if target > all elements

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid;
        break;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        index = mid;
        right = mid - 1;
      }
    }

    // If target not found, insert it into the array at the correct position
    if (nums[index] !== target) {
      const newNums = [...nums.slice(0, index), target, ...nums.slice(index)];
      console.log("newNums", newNums, index);
      
      setNums(newNums); // Update the array
    }

    // Update the result
    setResult(index);
  };
  const columns = [
    {
      title: 'Index',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  // Prepare data for the table
  const tableData = nums.map((num, index) => ({
    key: index,
    index,
    value: num,
  }));
  return (
    <MainLayout>
      {selectedProblem === 'SearchInsertPosition' && (
        <Card className='max-w-full'>
            <Button onClick={showModal} className="mb-2">View original Leetcode requirement</Button>
            <Title level={3}>Search Insert Position</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input
                type="number"
                placeholder="Enter "
                onChange={(e) => setTarget(Number(e.target.value))}
              />
              <Button type="primary" onClick={handleSearchInsert}>
                Search or Insert
              </Button>

              {result !== null && (
                <Typography.Text>
                  <strong>Result:</strong> {`Index: ${result}`}
                </Typography.Text>
              )}
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                style={{ marginTop: 20 }}
              />
            </Space>
            {isRequirementModalOpen && <Modal title="Search Insert Position" open={isRequirementModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
              <p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>
              <b>You must write an algorithm with O(log n) runtime complexity.</b> <br />
              <div>
                <b>Example 1:</b> <br />
                Input: nums = [1,3,5,6], target = 5 <br />
                Output: 2 <br /> <br />
                <b>Example 2:</b> <br />
                Input: nums = [1,3,5,6], target = 2 <br />
                Output: 1 <br /> <br />
                <b>Example 3:</b> <br />
                Input: nums = [1,3,5,6], target = 7 <br />
                Output: 4 <br />
              </div>
              <Button type='primary' href='https://leetcode.com/problems/search-insert-position/' className='mt-4' target='_blank'>
                View on Leetcode
              </Button>
            </Modal>}
        </Card>
      )}
    </MainLayout>

  )
}

export default SearchInsertPosition