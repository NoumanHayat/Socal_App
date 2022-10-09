import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import Storage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import translations from '../constants/translations/';
import { ITranslate } from '../constants/types';

export const TranslationContext = React.createContext({});

