import {
    JsonpModule,
    Jsonp,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    Http
} from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {SearchService} from './search.service';


describe('Service: Search', () => {
    let service: SearchService;
    let backend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [JsonpModule],
            providers: [
                SearchService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Jsonp,
                    useFactory: (backend, options) => new Jsonp(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });

        backend = TestBed.get(MockBackend);
        service = TestBed.get(SearchService);

    });

    it('search should return SearchItems', fakeAsync(() => {
        let response = {
            "resultCount": 1,
            "results": [
                {
                    "artistId": 78500,
                    "artistName": "U2",
                    "trackName": "Beautiful Day",
                    "artworkUrl60": "image.jpg"
                }
            ]
        };

        backend.connections.subscribe(connection => {
            connection.mockRespond(new Response(<ResponseOptions>{
                                            body: JSON.stringify(response)
            }));
        })

        service.search("U2");
        tick();

        expect(service.results.length).toBe(1);
        expect(service.results[0].artist).toBe("U2");
        expect(service.results[0].name).toBe("Beautiful Day");
        expect(service.results[0].thumbnail).toBe("image.jpg");
        expect(service.results[0].artistId).toBe(78500);

    }))

});