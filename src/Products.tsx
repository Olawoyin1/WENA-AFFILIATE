
export interface Product {
    id: string;
    title: string;
    image: string;
    price: number;
    category: 'clothing' | 'products' | 'food' | 'travel' | 'services';
    description: string;
    affiliate_url: string;
    rating: number;
    featured?: boolean;
  }
  
  const products: Product[] = [
    // Clothing
    {
      id: '1',
      title: 'Premium Cotton T-Shirt',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop',
      price: 10000,
      category: 'clothing',
      description: 'Super soft premium cotton t-shirt, perfect for everyday wear. Available in multiple colors and sizes.',
      affiliate_url: 'https://amazon.com',
      rating: 4.5,
      featured: true,
    },
    {
      id: '2',
      title: 'Slim Fit Jeans',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop',
      price: 13000,
      category: 'clothing',
      description: 'Classic slim fit jeans with stretch for maximum comfort. Perfect for casual or semi-formal occasions.',
      affiliate_url: 'https://amazon.com',
      rating: 4.2,
    },
    {
      id: '3',
      title: 'Winter Parka Jacket',
      image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop',
      price: 20000,
      category: 'clothing',
      description: 'Stay warm this winter with our insulated parka jacket. Water-resistant and windproof for ultimate protection.',
      affiliate_url: 'https://amazon.com',
      rating: 4.8,
    },
    
    // Products
    {
      id: '4',
      title: 'Wireless Noise Cancelling Headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop',
      price: 10000,
      category: 'products',
      description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality.',
      affiliate_url: 'https://amazon.com',
      rating: 4.7,
      featured: true,
    },
    {
      id: '5',
      title: 'Smart Home Hub',
      image: 'https://images.unsplash.com/photo-1556228149-d8f523f77b5a?w=800&auto=format&fit=crop',
      price: 9000,
      category: 'products',
      description: 'Control all your smart home devices from one central hub. Compatible with most major smart home brands.',
      affiliate_url: 'https://amazon.com',
      rating: 4.4,
    },
    {
      id: '6',
      title: 'Ultra HD 4K Monitor',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop',
      price: 120000,
      category: 'products',
      description: '32-inch Ultra HD monitor with HDR support, perfect for content creators, gamers, and professionals.',
      affiliate_url: 'https://amazon.com',
      rating: 4.6,
    },
    
    // Food
    {
      id: '7',
      title: 'Organic Superfood Mix',
      image: 'https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?w=800&auto=format&fit=crop',
      price: 3000,
      category: 'food',
      description: 'Blend of 15 organic superfoods, including acai, spirulina, and chia seeds. Perfect addition to smoothies and recipes.',
      affiliate_url: 'https://amazon.com',
      rating: 4.3,
    },
    {
      id: '8',
      title: 'Gourmet Coffee Variety Pack',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop',
      price: 4000,
      category: 'food',
      description: 'Set of 4 premium single-origin coffee varieties from around the world. Freshly roasted and ground to perfection.',
      affiliate_url: 'https://amazon.com',
      rating: 4.9,
      featured: true,
    },
    {
      id: '9',
      title: 'Artisanal Pasta Gift Set',
      image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800&auto=format&fit=crop',
      price: 9000,
      category: 'food',
      description: 'Selection of handmade Italian pasta varieties paired with premium sauces. Perfect gift for food enthusiasts.',
      affiliate_url: 'https://amazon.com',
      rating: 4.7,
    },
    
    // Travel
    {
      id: '10',
      title: 'Lightweight Travel Backpack',
      image: 'https://images.unsplash.com/photo-1553731595-e27b833d9980?w=800&auto=format&fit=crop',
      price: 100000,
      category: 'travel',
      description: 'Durable, water-resistant backpack with multiple compartments, perfect for weekend getaways or as a carry-on.',
      affiliate_url: 'https://amazon.com',
      rating: 4.5,
    },
    {
      id: '11',
      title: 'Universal Travel Adapter',
      image: 'https://images.unsplash.com/photo-1566307673735-27d52e9adf56?w=800&auto=format&fit=crop',
      price: 200000,
      category: 'travel',
      description: 'All-in-one travel adapter compatible in over 150 countries. Features 4 USB ports and fast charging technology.',
      affiliate_url: 'https://amazon.com',
      rating: 4.4,
    },
    {
      id: '12',
      title: 'Luxury Travel Pillow Set',
      image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=800&auto=format&fit=crop',
      price: 49000,
      category: 'travel',
      description: 'Memory foam travel pillow with eye mask and earplugs. The ultimate comfort set for long flights and journeys.',
      affiliate_url: 'https://amazon.com',
      rating: 4.8,
      featured: true,
    },
    
    // Services
    {
      id: '13',
      title: 'Premium Streaming Subscription',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&auto=format&fit=crop',
      price: 30000,
      category: 'services',
      description: 'Monthly subscription to access thousands of movies, TV shows, and exclusive content in HD and 4K quality.',
      affiliate_url: 'https://amazon.com',
      rating: 4.6,
    },
    {
      id: '14',
      title: 'Cloud Storage Plan',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
      price: 90000,
      category: 'services',
      description: '1TB of secure cloud storage for your photos, videos, and documents. Access from any device, anytime.',
      affiliate_url: 'https://amazon.com',
      rating: 4.5,
    },
    {
      id: '15',
      title: 'Online Language Learning Course',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop',
      price: 149000,
      category: 'services',
      description: 'Comprehensive 12-month language learning subscription. Learn at your own pace with personalized lessons.',
      affiliate_url: 'https://amazon.com',
      rating: 4.7,
      featured: true,
    },
  ];
  
  export default products;
  