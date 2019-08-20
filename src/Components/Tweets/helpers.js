import React from 'react';
import { Link } from 'react-router-dom';

export const renderContent = (content, hashtags) => {
  const findHashtag = ht => hashtags.find(hash => ht === hash.title);
  if (hashtags) {
    const arr = [];
    content.split(' ').forEach(str => {
      if (str.includes('#')) {
        // debugger;
        const hash = findHashtag(str);
        arr.push(' ');
        arr.push(
          <Link key={`hashtags-${hash.id}`} to={`/hashtags/${hash.id}`}>
            {' '}
            {hash.title}
          </Link>
        );
      } else {
        arr.push(' ');
        arr.push(str);
      }
    });
    return arr;
  }
  return content;
};
