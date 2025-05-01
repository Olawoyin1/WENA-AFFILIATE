const services = [
    {
      title: "Fast Delivery",
      description: "Get your orders delivered within 24-48 hours nationwide.",
      icon: "🚚",
    },
    {
      title: "24/7 Customer Support",
      description: "We're always here to help via chat, phone, or email.",
      icon: "📞",
    },
    {
      title: "Secure Payments",
      description: "All transactions are encrypted and safe.",
      icon: "🔒",
    },
    {
      title: "Easy Returns",
      description: "Not satisfied? Return within 7 days, no hassle.",
      icon: "↩️",
    },
  ];
  
  const Services = () => {
    return (
      <section className="flex items-center justify-center min-h-[90vh] py-12">
        <h2 className="cf font-bold text-center">Services</h2>
      </section>
    );
  };
  
  export default Services;
  