const IPAD =
    'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1';
const IPHONE =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const MAC =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15';

// used to mock detect from open ui
export const getUserAgent = (deviceType, defaultUserAgent) => {
    switch (deviceType) {
        case 'ipad':
            return IPAD;

        case 'iphone':
            return IPHONE;

        case 'mac':
            return MAC;

        default:
            return defaultUserAgent;
    }
};
