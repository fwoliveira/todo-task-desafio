import React, { ReactNode } from 'react';
import { View} from 'react-native';


interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  if (index % 2 === 0)
    return (
      <View 
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {children}
      </View>
    )
  
  return (
    <View
      style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
    >
      {children}
    </View>
  )
}
