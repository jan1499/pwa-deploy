import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

interface TabProps {
  title: string;
  renderContent?: (isActive: boolean) => ReactNode;
}

const Tabs: React.FC<{
  children: ReactNode;
  ClassName?: string;
  type?: 'tabs' | 'pills';
  position?: 'start' | 'center' | 'end';
  style?: string;
  justify?: string;
}> = ({ children, ClassName, type = 'tabs', position = 'start', style = '1', justify }) => {
  const tabsArray = Array.isArray(children) ? children : [children];
  const [activeTab, setActiveTab] = useState<string | null>(tabsArray[0].key as string);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const tabsRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = tabsRef.current;

    if (container) {
      const maxScroll = container.clientWidth - 250;
      const currentScroll = container.scrollLeft;

      if (direction === 'left') {
        container.scrollBy({
          left: -maxScroll,
          behavior: 'smooth',
        });
      } else {
        container.scrollBy({
          left: maxScroll,
          behavior: 'smooth',
        });
      }

      setShowLeftArrow(currentScroll > 0);
      setShowRightArrow(currentScroll < maxScroll);
    }
  };

  useEffect(() => {
    const container = tabsRef.current;

    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  }, [activeTab]);

  useEffect(() => {
    const container = tabsRef.current as HTMLElement;

    const handleScrollStart = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    container?.addEventListener('scroll', handleScrollStart);

    return () => {
      container?.removeEventListener('scroll', handleScrollStart);
    };
  }, []);

  const handleTabClick = (key: any) => {
    setActiveTab(key);
  };

  const getNavClassName = () => {
    let navClassName = 'nav';

    if (type === 'pills') {
      navClassName += ` nav-pills nav-style-${style}`;
    } else if (type === 'tabs') {
      navClassName += ` nav-tabs tab-style-${style}`;
    }
    navClassName += ` justify-content-${position} ${justify ? `nav-${justify}` : ''}`;
    return navClassName;
  };

  return (
    <>
      <div className='nav-container'>
        <div className={`slide-left ${showLeftArrow ? 'active' : 'd-none'}`} id="slide-left" onClick={() => handleScroll('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="30" height="30" viewBox="0 0 24 24">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
        </div>
        <ul className={`nav mb-3 border-0 hide-scrollbar ${getNavClassName()} ${ClassName}`} role="tablist" ref={tabsRef}>
          {tabsArray.map((tab: ReactElement<TabProps>) => {
            const isActive = activeTab === tab.key;
            return (
              <li className="nav-item" role="presentation" key={tab.key}>
                <a
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  role="tab"
                  href={`#${tab.key}`}
                  aria-selected={isActive ? 'true' : 'false'}
                  onClick={() => handleTabClick(tab.key)}>
                  {tab.props.title}
                  {tab.props.renderContent && tab.props.renderContent(isActive)}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={`slide-right ${showRightArrow ? 'active' : 'd-none'}`} id="slide-right" onClick={() => handleScroll('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="30" height="30" viewBox="0 0 24 24">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </div>
      </div>
      <div className="tab-content">
        {tabsArray.map((tab: ReactElement<TabProps>) => (
          <div
            key={tab.key}
            className={`tab-pane ${activeTab === tab.key ? 'active' : ''}`}>
            {activeTab === tab.key && tab}
          </div>
        ))}
      </div>
    </>
  );
};

const Tab: React.FC = ({ children }: any) => {
  return (
    <div className="tab-content-inner">
      {children}
    </div>
  );
};

export { Tab, Tabs };

