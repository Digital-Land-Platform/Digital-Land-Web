import React, { useCallback, useEffect, useState } from 'react';
import { GET_PROPERTY_BY_ID } from '../Queries/SingleProperty';
import { useParams } from 'react-router-dom';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { DetailIcon } from '../components/Cards/Propertycard';
import { GET_LOCATION } from '../Queries/locationqueries';
import { Location } from './HomePage/Homepage';
import { FaRegCreditCard, FaMoneyBillWave, FaTree } from 'react-icons/fa';
import BlueButton from '../components/Button/BlueButton';
import CustomButton from '../components/Button/CustomButton';
import { PAY_PROPERTY } from '../Mutations/payment';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { id } = useParams();
  const [getLocation] = useLazyQuery(GET_LOCATION);
  const [locations, setLocations] = useState<Record<string, Location>>({});
  const [formatedLocation, setFormatedLocation] = useState<string>('Loading location...');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [mobileMoneyOption, setMobileMoneyOption] = useState<string | null>(null);
  const [contactNumber, setContactNumber] = useState<string>('');
  const [creditCardOption, setCreditCardOption] = useState<string | null>(null);
  const [billingAddressOption, setBillingAddressOption] = useState<string | null>(null);

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_PROPERTY_BY_ID, {
    variables: { id }
  });

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    if (!token) {
      toast.error('You need to be logged in to buy.');
      // navigate('/login');
    }
  }, [navigate, token]);

  const [payProperty, { data: dataPay, loading: loadingPay, error: errorPay }] = useMutation(PAY_PROPERTY, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  const fetchLocation = useCallback(
    async (locationId: string) => {
      if (locations[locationId]) return locations[locationId];

      const { data } = await getLocation({ variables: { locationId } });
      if (data?.getLocation) {
        setLocations((prev) => ({
          ...prev,
          [locationId]: data.getLocation
        }));
        return data.getLocation;
      }
      return null;
    },
    [getLocation, locations]
  );

  const property = data?.getProperty;

  useEffect(() => {
    if (property) {
      fetchLocation(property.locationId);
    }
  }, [property, fetchLocation]);

  useEffect(() => {
    if (property && locations[property.locationId]) {
      const location = locations[property.locationId];
      const makeLocation = `${location.district}, ${location.country}`;
      setFormatedLocation(makeLocation);
    }
  }, [property, locations]);

  const handlePaymentMethodClick = (method: string) => {
    setSelectedPaymentMethod(method);
    setMobileMoneyOption(null);
    setContactNumber('');
    setCreditCardOption(null);
    setBillingAddressOption(null);
  };

  const handlePay = async () => {
    try {
      const paymentMethod = selectedPaymentMethod === 'creditCard' ? 'CREDIT_CARD' : 'MOBILE_MONEY';
      const variables = {
        paymentMethod,
        propertyId: id,
        transactionType: 'PURCHASE',
        ...(paymentMethod === 'MOBILE_MONEY' && { contactNumber }),
        ...(paymentMethod === 'CREDIT_CARD' && { billingAddress: billingAddressOption })
      };

      const { data } = await payProperty({ variables });

      if (data) {
        toast.success('Payment successful!');
      }
    } catch (error: any) {
      toast.error(`Failed to process payment! ${error.message}`);
    }
  };

  useEffect(() => {
    if (loadingPay) {
      toast.loading('Processing payment...');
    }
    if (errorPay) {
      toast.error('Failed to process payment!');
    }
    if (dataPay) {
      toast.success('Payment successful!');
    }
  }, [loadingPay, errorPay, dataPay]);

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="mx-10 text-2xl font-medium">{property?.title}</h1>
      <div className="w-full mt-6 flex justify-center items-start flex-row gap-6">
        <div className="w-[1/5] flex flex-col justify-center items-center">
          <p className="w-full text-sm">
            Pay <span className="font-bold">FRW {property?.price} </span>to Global Real Estate.
          </p>
          <div className="w-[300px] mt-4 mx-auto rounded-md flex flex-col items-center justify-start shadow-md border border-gray-300 overflow-hidden">
            <div className="w-full rounded-md">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <img src={property?.images[0].url} alt="property" />
              )}
            </div>
            <div className="mt-4 mb-4">
              <div className="flex flex-row gap-4">
                <DetailIcon iconClass="fas fa-home" text="Cottage" />
                <DetailIcon iconClass="fas fa-seedling" text="Field" />
              </div>
              <div className="flex items-center text-gray-500 text-sm my-2 space-x-2 pt-[10px]">
                <FaTree /> {/* Use the tree icon to represent acres */}
                <span>1 Acre</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm my-2 space-x-6 pt-[10px]">
                <DetailIcon iconClass="fas fa-map-marker-alt" text={formatedLocation} />
                <span>
                  4.7<i className="fas fa-star text-yellow-500"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center gap-4">
            <div className="flex justify-between items-center mt-6 gap-4 w-full bg-gray-200">
              <p className="text-sm p-3 text-gray-600 flex-1">{property?.title}:</p>
              <p className="text-sm p-3 text-gray-600 font-bold items-end">FRW {property?.price}</p>
            </div>

            <div className="flex justify-between items-center gap-4 w-full bg-gray-200">
              <p className="text-sm p-3 text-gray-600 flex-1">Natory Charges:</p>
              <p className="text-sm p-3 text-gray-600 font-bold items-end">FRW 10,000</p>
            </div>

            <div className="flex justify-between items-center gap-4 w-full bg-gray-200">
              <p className="text-sm p-3 text-gray-600 flex-1">{property?.title}:</p>
              <p className="text-sm p-3 text-gray-600 font-bold items-end">FRW {property?.price}</p>
            </div>
          </div>
        </div>

        {/* Right side section */}
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-full">
            <h2 className="text-white w-full rounded-md text-lg p-6 font-medium bg-gradient-to-t from-[#292233] via-[#1d1235] to-[#372458]">
              Payment methods
            </h2>
          </div>
          <div className="w-full p-4 flex flex-col justify-start items-start">
            <BlueButton
              // eslint-disable-next-line react/no-children-prop
              children={<FaMoneyBillWave />}
              title="Mobile Money"
              handle={() => handlePaymentMethodClick('mobileMoney')}
            />
            {selectedPaymentMethod === 'mobileMoney' && (
              <div className="mt-4">
                <p className="text-sm">Your mobile money account won&apos;t be charged until you issue payment.</p>
                <div className="mt-2">
                  <p className="text-lg mb-4">Network</p>
                  <label>
                    <input
                      type="radio"
                      name="mobileMoneyOption"
                      value="MTN"
                      checked={mobileMoneyOption === 'MTN'}
                      onChange={() => setMobileMoneyOption('MTN')}
                    />
                    MTN
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="mobileMoneyOption"
                      value="Airtel Money"
                      checked={mobileMoneyOption === 'Airtel Money'}
                      onChange={() => setMobileMoneyOption('Airtel Money')}
                    />
                    Airtel Money
                  </label>
                </div>
                {mobileMoneyOption && (
                  <div className="mt-4">
                    <p className="mb-4">Contact Number</p>
                    <div className="mt-4 flex justify-center items-start">
                      <label className="">
                        Rwanda
                        <input
                          type="text"
                          placeholder="0781234567"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                          className="ml-2 border border-gray-200 p-2 text-sm rounded-md"
                        />
                      </label>
                      <button
                        className="ml-4 text-sm text-white px-2 py-1 rounded-md transform-transition bg-gradient-to-t hover:scale-105 from-[#1d1235] to-[#372458]"
                        onClick={() => setContactNumber('0781234567')}
                      >
                        Fill with Account contact
                      </button>
                    </div>
                    {contactNumber && (
                      <div className="mt-2">
                        <CustomButton
                          title={`Pay FRW ${property?.price}`}
                          handle={handlePay}
                          // eslint-disable-next-line react/no-children-prop
                          children={<FaMoneyBillWave />}
                          classNames="border border-gray-300  px-10 mt-5 py-2 rounded-[10px] flex items-center gap-2 text-sm hover:opacity-90 bg-gradient-to-t from-[#FF9700] via-[#DF8407] to-[#BF710D]"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            <BlueButton
              // eslint-disable-next-line react/no-children-prop
              children={<FaRegCreditCard />}
              title="Secure Credit Card payment"
              handle={() => handlePaymentMethodClick('creditCard')}
            />
            {selectedPaymentMethod === 'creditCard' && (
              <div className="mt-4">
                <p className="text-sm">Your credit card won&apos;t be charged until you issue payment.</p>
                <div className="mt-4">
                  <p className="mb-4 text-lg">Card details</p>
                  <label>
                    <input
                      type="radio"
                      name="creditCardOption"
                      value="default"
                      checked={creditCardOption === 'default'}
                      onChange={() => setCreditCardOption('default')}
                    />
                    Use Default Credit Card
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="creditCardOption"
                      value="new"
                      checked={creditCardOption === 'new'}
                      onChange={() => setCreditCardOption('new')}
                    />
                    Use New Credit Card
                  </label>
                </div>
                {creditCardOption && (
                  <div className="mt-2">
                    <p className="mb-4 text-lg">Card Billing address</p>
                    <label>
                      New Address:
                      <input
                        placeholder="Province, District, Sector"
                        type="text"
                        value={billingAddressOption || ''}
                        onChange={(e) => setBillingAddressOption(e.target.value)}
                        className="ml-2 border border-gray-200 p-2 text-sm rounded-md"
                      />
                    </label>
                    <BlueButton
                      title="Use Default Account Address"
                      handle={() => setBillingAddressOption('Default Address')}
                    />
                    {billingAddressOption && (
                      <div className="mt-2">
                        <CustomButton
                          title={`Pay FRW ${property?.price}`}
                          handle={handlePay}
                          // eslint-disable-next-line react/no-children-prop
                          children={<FaMoneyBillWave />}
                          classNames="border border-gray-300  px-10 mt-5 py-2 rounded-[10px] flex items-center gap-2 text-sm hover:opacity-90 bg-gradient-to-t from-[#FF9700] via-[#DF8407] to-[#BF710D]"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
