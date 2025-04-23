
import { Facebook, Twitter, Youtube } from 'lucide-react';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Legal Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Copyright Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Copyright Notice</h3>
            <p className="text-gray-400 mb-4">
              All content on this website (www.afrokaviar.com) is protected under UK and international 
              copyright laws. No part may be copied, stored, or shared—electronically or 
              otherwise—without written permission from Afrokaviar Ltd.
            </p>
            <p className="text-gray-400">
              Afrokaviar is committed to protecting the rights of its creators, partners, and community.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center text-gray-500">
          <p>©2025 Afrokaviar.com All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
