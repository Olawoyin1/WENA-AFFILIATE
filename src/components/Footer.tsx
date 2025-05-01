// components/Footer2.tsx
const Footer2 = () => (
    <footer className="bg-white text-gray-800 border-t py-9">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
      <p className="text-xs text-gray-500"> &copy; {new Date().getFullYear()} WENA AFFILIATE - All Rights Reserved. </p>
        <div className="space-x-4 mt-2 text-sm sm:mt-0">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
  export default Footer2;
  