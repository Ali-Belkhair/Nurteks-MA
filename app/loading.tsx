import { Leaf } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-primary/20 rounded-xl animate-ping mx-auto" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Nurteks Morocco</h2>
        <p className="text-gray-600">Chargement en cours...</p>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
}