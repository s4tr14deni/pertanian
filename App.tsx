import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

import { HomeScreen } from './screens/HomeScreen';
import { MarketplaceScreen } from './screens/MarketplaceScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { SellerScreen } from './screens/SellerScreen';
import { GeminiAgronomist } from './components/GeminiAgronomist';

import { CartItem, Product } from './types';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ headerShown: true, title: 'Detail Produk' }}
    />
  </Stack.Navigator>
);

const MarketplaceStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MarketplaceList" component={MarketplaceScreen} />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ headerShown: true, title: 'Detail Produk' }}
    />
  </Stack.Navigator>
);

const SellerStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SellerDash" component={SellerScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  const CartWrapper = () => (
    <CartScreen
      items={cartItems}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
    />
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#059669',
              tabBarInactiveTintColor: '#94a3b8',
              tabBarStyle: {
                backgroundColor: '#fff',
                borderTopColor: '#e2e8f0',
                paddingBottom: 8,
                height: 60,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
              }}
            />
            <Tab.Screen
              name="Marketplace"
              component={MarketplaceStack}
              options={{
                tabBarLabel: 'Belanja',
                tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛍️</Text>,
              }}
            />
            <Tab.Screen
              name="Cart"
              component={CartWrapper}
              options={{
                tabBarLabel: `Keranjang${cartItems.length > 0 ? ` (${cartItems.length})` : ''}`,
                tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛒</Text>,
              }}
            />
            <Tab.Screen
              name="Seller"
              component={SellerStack}
              options={{
                tabBarLabel: 'Seller',
                tabBarIcon: () => <Text style={{ fontSize: 20 }}>🌾</Text>,
              }}
            />
          </Tab.Navigator>

          <GeminiAgronomist />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
