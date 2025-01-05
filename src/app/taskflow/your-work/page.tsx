import { Card } from '@/components/common/Card';
import MainHeading from '@/components/common/MainHeading';
import SmallHeading from '@/components/common/SmallHeading';
import Image from 'next/image';
import Link from 'next/link';
import projectImg from '../../../../public/images/google.svg';

interface Project {
  title: string;
  description: string;
  openIssuesCount: number;
  doneIssuesCount: number;
}

const YourWorkPg = () => {

  const recentProjects: Project[] = [
    { title: 'Revamp Tech Website', description: 'Complete redesign of the main product website to enhance user experience.', openIssuesCount: 5, doneIssuesCount: 3 },
    { title: 'Health Tracker App', description: 'Development of a mobile application for tracking daily health and fitness activities.', openIssuesCount: 2, doneIssuesCount: 2 },
    { title: 'E-commerce AI Tool', description: 'Integration of AI to personalize shopping experiences on our e-commerce platform.', openIssuesCount: 7, doneIssuesCount: 1 },
    { title: 'Corporate Training System', description: 'Implementation of a new training system to streamline employee onboarding.', openIssuesCount: 0, doneIssuesCount: 10 },
    { title: 'Green Energy Project', description: 'Research and development project focused on innovative green energy solutions.', openIssuesCount: 8, doneIssuesCount: 5 },
    { title: 'Real Estate Data Analysis', description: 'Data analysis project to predict real estate market trends using big data.', openIssuesCount: 1, doneIssuesCount: 0 },
    { title: 'Marketing Campaign Tracker', description: 'Development of a digital tool to manage and analyze marketing campaigns.', openIssuesCount: 3, doneIssuesCount: 3 },
    { title: 'Customer Support Portal', description: 'Upgrade of the customer support portal to enhance customer service.', openIssuesCount: 5, doneIssuesCount: 4 },
    { title: 'Mobile Security Enhancements', description: 'Project to enhance the security features of our mobile banking app.', openIssuesCount: 6, doneIssuesCount: 5 },
    { title: 'Smart Home Systems', description: 'Innovative project to develop integrated systems for smart homes.', openIssuesCount: 4, doneIssuesCount: 2 }
  ];


  return (
    <div className='container'>
      <div className='my-3'>
        <MainHeading text={'Your work'} subText='Quick access to all your upcoming and ongoing tasks' />
      </div>
      <hr />
      <div className="my-3 d-flex justify-content-between align-items-center">
        <SmallHeading text={'Recent projects'} />
        {/* <Link href="/taskflow/projects"><div className='fs-14 fw-semibold'>View all projects</div></Link> */}
      </div>
      <div className='row g-3'>
        {recentProjects.map((data, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card className="recent-project-card pointer">
              <div className='d-flex align-items-center gap-3 mb-2'>
                <div className="box-img-35"><Image src={projectImg} alt="" width={25} height={25} /></div>
                <div>
                  <h2 className='m-0 p-0 fs-14'>{data.title}</h2>
                  <p className='m-0 p-0 fs-12 text-grey'>{data.description}</p>
                </div>
              </div>
              <div className='ms-5'>
                <div className='mb-1 fs-12 ms-1 text-muted fw-semibold'>QUICK LINKS</div>
                <div className='ms-1 mb-2'>
                  <Link href="/my-open-issues" className='quick-link-item d-flex justify-content-between'>
                    <div className="p-0 fs-12 mb-1">My open issues</div>
                    <div className="p-0 fs-12">{data.openIssuesCount}</div>
                  </Link>
                  <Link href="/done-issues" className='quick-link-item d-flex justify-content-between'>
                    <div className="p-0 fs-12">Done issues</div>
                    <div className="p-0 fs-12">{data.doneIssuesCount}</div>
                  </Link>
                </div>
              </div>
              <hr className='p-0 m-0 mb-2' />
              <div className='fs-12 ms-5 ps-1'>
                Board
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className='pb-2'>

      </div>
    </div>
  )
}

export default YourWorkPg