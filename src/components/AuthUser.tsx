
// import React, { createContext, useState, useContext, useEffect } from 'react';
// // import { toast } from '@/components/ui/use-toast';

// // Type definitions
// export type User = {
//   id: string;
//   email: string;
//   name: string;
//   bookmarks: string[];
// };

// type AuthContextType = {
//   user: User | null;
//   isLoading: boolean;
//   login: (email: string, password: string) => void;
//   register: (email: string, password: string, name: string) => void;
//   logout: () => void;
//   bookmarkProduct: (productId: string) => void;
//   removeBookmark: (productId: string) => void;
// };

// // Create context with default values
// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   isLoading: true,
//   login: () => {},
//   register: () => {},
//   logout: () => {},
//   bookmarkProduct: () => {},
//   removeBookmark: () => {},
// });

// // Mock users for demonstration (would be replaced by Firebase or another DB)
// const mockUsers = [
//   {
//     id: '1',
//     email: 'user@example.com',
//     password: 'password123',
//     name: 'Demo User',
//     bookmarks: ['1', '5', '9'],
//   },
// ];

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Check for existing session on component mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem('wena_user');
//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);
//       } catch (error) {
//         console.error('Failed to parse stored user:', error);
//         localStorage.removeItem('wena_user');
//       }
//     }
//     setIsLoading(false);
//   }, []);

//   // Login function
//   const login = (email: string, password: string) => {
//     const foundUser = mockUsers.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (foundUser) {
//       // Create user object without password
//       const { password: _, ...safeUserData } = foundUser;
//       setUser(safeUserData as User);
//       localStorage.setItem('wena_user', JSON.stringify(safeUserData));
//     //   toast({
//     //     title: 'Login successful',
//     //     description: `Welcome back, ${safeUserData.name}!`,
//     //   });
//       return true;
//     } else {
//     //   toast({
//     //     title: 'Login failed',
//     //     description: 'Invalid email or password',
//     //     variant: 'destructive',
//     //   });
//       return false;
//     }
//   };

//   // Register function
//   const register = (email: string, password: string, name: string) => {
//     if (mockUsers.some((u) => u.email === email)) {
//     //   toast({
//     //     title: 'Registration failed',
//     //     description: 'Email already in use',
//     //     variant: 'destructive',
//     //   });
//       return false;
//     }

//     // In a real app, this would create a user in the database
//     const newUser = {
//       id: `${mockUsers.length + 1}`,
//       email,
//       name,
//       bookmarks: [],
//     };
    
//     setUser(newUser);
//     localStorage.setItem('wena_user', JSON.stringify(newUser));
    
//     // toast({
//     //   title: 'Registration successful',
//     //   description: `Welcome, ${name}!`,
//     // });
//     return true;
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('wena_user');
//     // toast({
//     //   title: 'Logged out',
//     //   description: 'You have been successfully logged out',
//     // });
//   };

//   // Bookmark a product
//   const bookmarkProduct = (productId: string) => {
//     if (!user) return;
    
//     if (user.bookmarks.includes(productId)) {
//     //   toast({
//     //     title: 'Already bookmarked',
//     //     description: 'This product is already in your bookmarks',
//     //   });
//       return;
//     }
    
//     const updatedUser = {
//       ...user,
//       bookmarks: [...user.bookmarks, productId],
//     };
    
//     setUser(updatedUser);
//     localStorage.setItem('wena_user', JSON.stringify(updatedUser));
    
//     // toast({
//     //   title: 'Product bookmarked',
//     //   description: 'Product added to your bookmarks',
//     // });
//   };

//   // Remove a bookmark
//   const removeBookmark = (productId: string) => {
//     if (!user) return;
    
//     const updatedUser = {
//       ...user,
//       bookmarks: user.bookmarks.filter(id => id !== productId),
//     };
    
//     setUser(updatedUser);
//     localStorage.setItem('wena_user', JSON.stringify(updatedUser));
    
//     // toast({
//     //   title: 'Bookmark removed',
//     //   description: 'Product removed from your bookmarks',
//     // });
//   };

//   return (
//     <AuthContext.Provider value={{ user, isLoading, login, register, logout, bookmarkProduct, removeBookmark }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook for using auth context
// export const useAuth = () => useContext(AuthContext);
