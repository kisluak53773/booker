import React, { FC } from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const TabsLayout: FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          title: 'Books',
          tabBarIcon: ({ color }) => (
            <Feather
              name="book"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="auth"
        options={{
          headerTitle: 'Authorization',
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Feather
              name="user"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
