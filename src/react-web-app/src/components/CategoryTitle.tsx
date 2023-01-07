import { Text } from '@mantine/core';

type CTP = {
  children: string;
};

function CategoryTitle({ children }: CTP) {

  return (
    <Text
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      fz={80}
      fw={700}
      mt={20}
      tt='capitalize'
    >
      {children}
    </Text>
  );
}

export default CategoryTitle;
