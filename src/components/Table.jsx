import React from 'react';

const data = [
  {
    creditline:
      'Harvard Art Museums/Arthur M. Sackler Museum, Bequest of the Hofer Collection of the Arts of Asia',
    dateoflastpageview: '2023-05-19',
    division: 'Asian and Mediterranean Art',
    contact: 'am_asianmediterranean@harvard.edu',
    verificationleveldescription:
      'Adequate. Object is adequately described but information may not be vetted',
    period: 'Chosŏn dynasty, 1392-1910',
    classification: 'Prints',
    primaryimageurl: 'https://nrs.harvard.edu/urn-3:HUAM:CARP09935_dynmc',
    lastupdate: '2023-09-07T05:55:35-0400',
    medium:
      'One of a set of three thread-bound, woodblock-printed books; ink on paper. Late 16th-century reprint (probably ca. 1580) of a book whose preface is dated to 1432.',
    title:
      'Illustrated Guide to the Three Relations (Sam-gang Haeng-sil To), Volume 1: Filial Sons',
    accessionmethod: 'Bequest',
    provenance:
      'Philip Hofer (1898-1984), Cambridge, MA (by 1985), bequest; to Harvard University Art Museums, 1985.',
    dated: 'late 16th century',
    department: 'Department of Asian Art',
    url: 'https://www.harvardartmuseums.org/collections/object/96952',
    dateoffirstpageview: '2009-07-20',
    century: '16th century',
    objectnumber: '1985.957.1',
    culture: 'Korean',
    dimensions:
      'each page (folded sheet): H. 37.3 x W. 20.5 cm (14 11/16 x 8 1/16 in.)',
  },
];

const Table = () => {
  return (
    <table>
      <tbody>
        {Object.entries(data[0]).map(([property, value], index) => (
          <tr key={index}>
            <td>{property}:</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
