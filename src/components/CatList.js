export const catList = {

    baseUrl: 'https://newsapi.org/v2/',
    apiKey: 'apiKey=a4e35254d7c7440f86997faeffd303b6',
    getCats: function() {
        return [
            {title: 'TechCrunch', url: `${this.baseUrl}top-headlines?sources=techcrunch&${this.apiKey}`},
            {title: 'Apple', url: `${this.baseUrl}everything?q=apple&from=2021-08-24&to=2021-08-24&sortBy=popularity&${this.apiKey}`},
            {title: 'USA', url: `${this.baseUrl}top-headlines?country=us&category=business&${this.apiKey}`},
            {title: 'Tesla', url: `${this.baseUrl}everything?q=tesla&from=2021-07-25&sortBy=publishedAt&${this.apiKey}`},
            {title: 'Wall Street', url: `${this.baseUrl}everything?domains=wsj.com&${this.apiKey}`}        
        ];
    }
}
