import React from 'react';
import Link from 'next/link';
import Icon from '@/others/Icon';

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
  icon?: any; 
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" >
      <ol className="breadcrumb p-0 m-0">
        {items.map((item, index) => {
          const IconImage = item.icon; 

          return (
            <li
              key={index}
              className={`breadcrumb-item fs-12 ${item.isActive ? 'active' : ''}`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.isActive ? (
                <>
                  {/* {IconImage &&  <Icon name={"home"} size={'30'} className="text-primary me-1" />}  */}
                  {item.label}
                </>
              ) : (
                <Link href={item.href} passHref className='text-decoration-none'>
                    {/* {IconImage &&  <Icon name={"full-plus"} size={'30'} className="text-primary me-1" />}  */}
                    {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
