import API from 'src/service/API';

export function getData() {
    return API.get(`/HelpTOC.json`
    ).then(({ data }) => data);
}
