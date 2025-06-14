
import React from 'react';
import { Certificate } from '../types';

const DocumentCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5-3.75 3.75-1.5-1.5" />
 </svg>
);

const ArrowTopRightOnSquareIconSmall: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


const CertificateItem: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
      {certificate.imageUrl ? (
        <img src={certificate.imageUrl} alt={certificate.name} className="w-full h-40 object-contain mb-4 rounded" />
      ) : (
        <DocumentCheckIcon className="w-16 h-16 text-primary-500 dark:text-primary-400 mb-4" />
      )}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 flex-grow">{certificate.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Issued by: {certificate.issuer}</p>
      <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">Date: {certificate.date}</p>
      <a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
      >
        View Credential
        <ArrowTopRightOnSquareIconSmall className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default CertificateItem;
