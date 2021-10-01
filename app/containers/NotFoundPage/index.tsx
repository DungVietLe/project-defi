/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import H3 from 'components/H3';

export default function NotFound() {
  return (
    <article>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <H3>
        <FormattedMessage {...messages.title} />
      </H3>
    </article>
  );
}
