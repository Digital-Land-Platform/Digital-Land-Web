import React from 'react';
import PropertyCard from '../Cards/Propertycard';
//import PropertyCard from '../Cards/Propertycard';

const HighlightsSection: React.FC = () => {
  return (
    <div>
      <div
        className="shadow-md rounded-t-lg p-6 w-full h-[62px] pt-4 pl-6 gap-0"
        style={{ background: 'linear-gradient(178.76deg, #FFFFFF 1.06%, #FFCB80 98.94%)' }}
      >
        <div className="w-[1104px] h-[86px] gap-0">
          <h3
            className="font-merriweather text-[24px] font-bold leading-[30.17px] text-left"
            style={{ color: '#000034' }}
          >
            Highlights
          </h3>
        </div>
      </div>
      <div className="mt- bg-[#F5F6FA] w-[1104px] h-[319px] p-4 rounded-lg shadow-sm">
        <ul className="space-y-2">
          {[
            {
              icon: '🌇',
              text: '🌇Cityscape Views: Floor-to-ceiling windows offering panoramic skyline views.'
            },
            {
              icon: '🛁',
              text: '🛁Luxurious Master Suite: Includes a spa-style bathroom with a soaking tub, rainfall shower, and custom walk-in closet.'
            },
            {
              icon: '🌳',
              text: '🌳Private Rooftop Terrace: Ideal for outdoor relaxation, featuring a fire pit and lush landscaping.'
            },
            {
              icon: '🏠',
              text: '🏠Smart Home Integration: Equipped with cutting-edge technology for seamless living and security.'
            }
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start"
              style={{
                width: '1040px',
                height: '51px',
                padding: '8px 0px',
                gap: '16px',
                backgroundColor: 'linear-gradient(178.76deg, #FFFFFF 1.06%, #FFCB80 98.94%)'
              }}
            >
              <span className="text-2xl mr-4">{item.icon}</span>
              <p
                className="text-gray-700"
                style={{
                  background: '#FFEACD',
                  padding: '8px',
                  color: '#333333'
                }}
              >
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        {/* Detailed Description Section */}
        <div
          className="shadow-md rounded-t-lg p-6 w-full h-[62px] pt-4 pl-6 gap-0"
          style={{ background: 'linear-gradient(178.76deg, #FFFFFF 1.06%, #FFCB80 98.94%)' }}
        >
          <div className="w-[1104px] h-[86px] gap-0">
            <h3
              className="font-merriweather text-[24px] font-bold leading-[30.17px] text-left"
              style={{ color: '#000034' }}
            >
              Detailed Description
            </h3>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">
            Here you can provide more in-depth details about the property, its features, and any other relevant
            information.
          </p>
        </div>
      </div>
      <div className="bg-[#F5F6FA] w-[1104px] h-[895px]">
        {/* Neighbourhood */}
        <div className="flex items-center mb-2 w-[800px] h-[261px] p-[16px_24px] gap-[24px] border-t border-white">
          <span className="w-[150px]">Neighbourhood:</span>
          <span className="flex items-center font-merriweather text-14px leading-17.6 text-left">
            {'Shopping malls'} <br />
            {'Schools'} <br />
            {'Hospitals'} <br />
            {'Parks'}
          </span>
        </div>

        {/* Accessibility and Legal Status */}
        <div className="flex border-t  mb-4 gap-8">
          <div className="w-[360px]">
            {/* Legal Status */}
            <div className="flex items-center border-t p-[16px_24px mb-10">
              <span className="w-[150px]">Legal Status:</span>
              <span className="flex items-center font-merriweather text-14px leading-17.6 text-left">
                {'No known issues'}
              </span>
            </div>

            {/* Accessibility */}
            <div className="flex border-t items-center">
              <span className="w-[250px]">Basic Needs Accessibility:</span>
              <span className="flex items-center font-merriweather text-10px leading-17.6 text-left">
                {'Shopping malls, schools, hospitals, and parks are all within walking distance.'}
              </span>
            </div>
          </div>

          {/* Energy Rating, Zoning, and Dominant Weather */}
          <div className="w-[544px] border-t flex flex-col justify-center gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="font-merriweather">Energy Rating:</span>
              <span>{'A+'}</span>
            </div>
            <div className="flex flex-col border-t  items-center">
              <span className="font-merriweather">Zoning:</span>
              <span>{'Residential'}</span>
            </div>
            <div className="flex flex-col border-t  items-center">
              <span className="font-merriweather">Dominant Weather:</span>
              <span>{'Temperate'}</span>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="flex items-center border-t mb-2 w-[800px] h-[146px] p-[16px_24px] gap-[24px] border-t border-white">
          <span className="w-[150px]">Disclosure:</span>
          <span className="flex items-center font-merriweather text-14px leading-17.6 text-left">
            {'No known issues'}
          </span>
        </div>

        {/* Future Development Plans */}
        <div className="flex items-center border-t  mb-2 w-[800px] h-[146px] p-[16px_24px] gap-[24px] border-t border-white">
          <span className="w-[150px]">Future Development Plans:</span>
          <span className="flex items-center font-merriweather text-14px leading-17.6 text-left">
            {'No known plans'}
          </span>
        </div>
      </div>
      <div>
        {/* Similar Properties Section */}
        <div
          className="p-8 "
          style={{
            background:
              'linear-gradient(180deg, #FFFFFF 0%, #FFCB80 25%, #C7AD9A 50%, #8E8EB4 77%, rgba(0, 0, 52, 0.72) 100%)'
          }}
        >
          <div className="text-center mb-8">
            <h2 className="font-merriweather text-[24px] font-bold text-[#000034]">
              Similar Properties you might want to see
            </h2>
          </div>
          <div>
            <PropertyCard id={''} src={''} title={''} price={0} size={''} description={''} location={''} />
          </div>
        </div>

        {/* Recent Searches Section */}
        <div
          className="p-8"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 52, 0.72) 0%, #8E8EB4 25%, #C7AD9A 50%, #FFCB80 75%, #FFFFFF 100%)'
          }}
        >
          <div className="text-center mb-8">
            <h2 className="font-merriweather text-[24px] font-bold text-white">Your recent searches</h2>
          </div>
          <div>
            <PropertyCard id={''} src={''} title={''} price={0} size={''} description={''} location={''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
