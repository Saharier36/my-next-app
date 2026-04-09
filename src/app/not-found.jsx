

const NotFound = () => {
    return (
      <div class="w-full h-screen flex items-center justify-center">
        <div class="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md max-w-md text-center">
          <h2 class="text-5xl font-bold mb-2">404</h2>
          <h2 class="text-2xl font-bold mb-2">Page Not Found</h2>
          <p>The page you are looking for dose not exist.</p>
        </div>
      </div>
    );
};

export default NotFound;