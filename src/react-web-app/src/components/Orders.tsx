import { Text, Title } from '@mantine/core';

interface Props {
  arr : Array<String>;
};

function Orders(props: Props){
  const arr = props.arr;

  const renderList = arr.map((item) => 
                             <div>{item}</div>
                           );

  return (
    <>
      <Title> List of Ordered Drinks </Title>
      <Text>(Refresh to update)</Text>
      <ul>{renderList}</ul>
    </>
  );
}

export default Orders;
