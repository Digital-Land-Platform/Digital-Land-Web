import React from 'react';
//import PropertyCard from '../Cards/Propertycard';
import { PropertyDetails } from '../../types/Property/property';
//import SummarySection from './summarysection';
//import SimilarPropertiesSection, { SimilarProperties } from './similarproperties';

type HighlightsSectionProps = {
  property: PropertyDetails;
  //properties: SimilarProperties[];
};

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ property }) => {
  const { neighborhood, legalStatus, zoningInformation, energyrating, disclosure, futureDevelopmentPlans } = property;
  return (
    <div className="w-[1104px] h-[4364px] p-[0px_0px_80px_0px] space-y-8">
      <div
        className="shadow-md rounded-t-lg p-6 w-full h-[62px] pt-4 pl-6 gap-0"
        style={{ background: 'linear-gradient(178.76deg, #FFFFFF 1.06%, #FFCB80 98.94%)' }}
      >
        <div className="w-[full] max-w-full h-[86px] gap-0">
          <h3
            className="font-merriweather text-[24px] font-bold leading-[30.17px] text-left"
            style={{ color: '#000034' }}
          >
            Highlights
          </h3>
        </div>
      </div>
      <div className="mt- bg-[#F5F6FA] max-w-[1104px] max-h-[319px] p-4 rounded-lg shadow-sm">
        <ul className="space-y-3">
          {[
            {
              icon: '🌇',
              text: '🌇Cityscape Views: Floor-to-ceiling windows offering panoramic skyline views.'
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
                width: '1000px',
                height: '51px',
                padding: '8px 0px',
                gap: '16px',
                backgroundColor: 'linear-gradient(178.76deg, #FFFFFF 1.06%, #FFCB80 98.94%)'
              }}
            >
              <span className="text-2xl mr-4">{item.icon}</span>
              <p
                className="text-sm text-gray-700"
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
              className="font-merriweather text-[20px] font-bold leading-[30.17px] text-left"
              style={{ color: '#000034' }}
            >
              Detailed Description
            </h3>
          </div>
        </div>
        <div className="mt-6">
          <p className=" text-sm text-gray-600">
            Here you can provide more in-depth details about the property, its features, and any other relevant
            information.
          </p>
        </div>
      </div>
      <div className="bg-[#F5F6FA] w-[1104px] h-[600px]">
        {/* Neighbourhood */}
        <div className="flex items-center mb-2 w-[800px] h-[100px] p-[16px_24px] gap-15 border-white">
          <span className="w-[230px] text-sm">Neighbourhood:</span>
          <span className="flex items-center font-merriweather text-sm leading-17.6 text-left">{neighborhood}</span>
        </div>

        {/* Accessibility and Legal Status */}
        <div className="flex gap-8 p-8">
          <div className="w-[360px]">
            {/* Legal Status */}
            <div className="flex items-center border-t p-[16px_24px mb-10">
              <span className="w-[230px] text-sm">Legal Status:</span>
              <span className="flex items-center font-merriweather text-sm leading-17.6 text-left">{legalStatus}</span>
            </div>

            {/* Accessibility */}
            <div className="flex border-t gap-10 pt-2 items-center">
              <span className="w-[650px] text-sm">Basic Needs Accessibility:</span>
              <span className="flex items-center font-merriweather text-sm leading-17.6 text-left">
                {'Shopping malls, schools and parks are all within walking distance.'}
              </span>
            </div>
          </div>

          {/* Energy Rating, Zoning, and Dominant Weather */}
          <div className="w-[544px]  flex flex-col justify-center gap-4 items-center">
            <div className="flex justify-between items-center border-b py-2">
              <span className="font-merriweather text-sm w-[120px]">Energy Rating:</span>
              <span>{energyrating}</span>
            </div>
            <div className="flex justify-between items-center border-b py-2">
              <span className="font-merriweather text-sm w-[120px]">Zoning:</span>
              <span className="text-sm">{zoningInformation}</span>
            </div>
            <div className="flex justify-between items-center border-b py-2">
              <span className="font-merriweather text-sm w-[150px]">Dominant Weather:</span>
              <span className=" text-sm ">{'Temperate'}</span>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="flex items-center border-t mb-2 w-[800px] h-[100px] p-[16px_24px] gap-24 py-2 border-white">
          <span className="w-[150px] text-sm">Disclosure:</span>
          <span className="flex items-center font-merriweather text-sm leading-17.6 text-left">{disclosure}</span>
        </div>

        {/* Future Development Plans */}
        <div className="flex items-center border-t  mb-2 w-[800px] h-[146px] p-[16px_24px] gap-10 border-t py-2 border-white">
          <span className="w-[190px] text-sm">Future Development Plans:</span>
          <span className="flex items-center font-merriweather text-sm leading-17.6 text-left">
            {futureDevelopmentPlans}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
