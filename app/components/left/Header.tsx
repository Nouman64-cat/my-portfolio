import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="space-y-2 mt-24 md:mt-14">
      <h1 className="text-purplish text-5xl font-bold">Nouman Ejaz</h1>
      <p className="text-light_greyish">Frontend Engineer | UI/UX Designer</p>
      <p className="text-light_greyish text-sm">
        I build experience with user interfaces and intriguing designs
      </p>
      {/* <div>
        <Link href="/free-resources">
          Free Resources
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
