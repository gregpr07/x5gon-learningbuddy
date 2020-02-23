import React from "react";

import ReactPaginate from "react-paginate";

import { Layout } from "../components/layout";
import { Navbar } from "../components/components";

class Search extends React.Component {
  constructor(props) {
    super(props);
    // STATE

    this.state = {
      defaultSearch: true,
      search_key: "",
      type: "all",
      current_page: 1,
      previous_page: 0,
      previous_search: "",
      api_search: {
        query: {},
        rec_materials: [],
        metadata: { total_pages: 0 }
      },
      isLoaded: true,
      showRecommendations: false,
      IsSearching: false,
      corsEnabled: false,
      site_api: "https://platform.x5gon.org/api/v1/",
      loading: true
    };
  }

  componentDidMount = () => {
    if (this.state.defaultSearch && this.state.search_key !== "undefined") {
      this.searchComponent();
      this.setState({ defaultSearch: false });
    }
  };

  searchComponent = currentPage => {
    this.setState({
      previous_search: String(this.state.search_key),
      previous_page: parseInt(this.state.current_page),
      loading: true
    });
    window.scrollTo(0, 0);
    // removed (this.state.search_key !== this.state.previous_search || this.state.previous_page !== currentPage) because of bugs
    if (this.state.search_key) {
      this.setState({
        isLoaded: false
      });
      fetch(
        this.state.site_api +
          "search?text=" +
          this.state.search_key +
          "&page=" +
          currentPage +
          "&types=" +
          this.state.type +
          "&licenses=" +
          "&languages=" +
          "&provider_ids=" +
          "&limit="
      )
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.setState({
            isLoaded: true,
            api_search: {
              query: json.query,
              rec_materials: json.rec_materials,
              metadata: json.metadata
            },
            showRecommendations: false,
            IsSearching: true,
            loading: false
          });
        });
    }
  };
  ChangeSearchKey = value => {
    this.setState({
      search_key: value,
      showRecommendations: true
    });
  };
  handleSearch = e => {
    this.setState({
      loading: true
    });
    e.preventDefault();
    this.searchComponent();
  };
  AcceptRec = name => {
    this.setState({ search_key: name, showRecommendations: false });
  };
  ChangePage = data => {
    this.setState({ current_page: data.selected });
    console.log(data.selected);
    this.searchComponent(data.selected + 1);
  };
  /* PLUGIN FROM https://www.npmjs.com/package/react-paginate */
  BottomPagination = () => {
    if (this.state.api_search.metadata.total_pages) {
      return (
        <div>
          <p className="text-center text-ecosystem text-light-grey">PAGE</p>
          <ReactPaginate
            pageCount={this.state.api_search.metadata.total_pages}
            pageRangeDisplayed={4}
            marginPagesDisplayed={2}
            onPageChange={this.ChangePage}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            activeClassName={"active"}
            breakLabel={"..."}
            breakClassName={"pl-3 pr-2"}
            breakLinkClassName={"page-break"}
            previousLabel={"previous"}
            previousClassName={"page-previous"}
            previousLinkClassName={"page-link"}
            nextLabel={"next"}
            nextClassName={"page-next"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  NrOfSearches = () => {
    if (this.state.IsSearching === true)
      return (
        <div className="p-64 text-center text-semi-light">
          <h4>Found {this.state.api_search.metadata.total_hits} MATERIALS</h4>
        </div>
      );
    else {
      return null;
    }
  };
  FilterTab = () => {
    const Type = () => {
      const types = ["Video", "Audio", "Text"];
      const ChangeType = type => {
        if (this.state.type === type) {
          type = "all";
        }
        this.setState(
          {
            type: type
          },
          () => this.searchComponent()
        );
      };
      return (
        <div className="mx-auto">
          <div className="filter mt-3">
            <div
              className="type-li"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Type
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {types.map(type => (
                <button
                  key={type}
                  className={
                    "dropdown-item" +
                    (this.state.type === type ? " active" : "")
                  }
                  onClick={() => ChangeType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className="row">
        <Type />
      </div>
    );
  };
  SearchBar = () => {
    return (
      <div className="mx-3 mx-xl-0">
        <form onSubmit={this.handleSearch} className="search-input mx-0">
          <input
            type="text"
            value={this.state.search_key}
            onChange={e => this.ChangeSearchKey(e.target.value)}
            placeholder="Search"
            autoComplete="off"
          />
          <button className="ml-2 btn btn-primary btn-sm" type="submit">
            Search
          </button>
        </form>
        <this.FilterTab />
      </div>
    );
  };
  SearchDIV = () => {
    return (
      <div className="py-4 ds-default">
        <div className="maxer-880 mx-auto px-4 px-lg-0">
          <this.SearchBar />
        </div>
      </div>
    );
  };
  SearchItem = item => {
    let sitem = item;
    if (sitem.description && sitem.description.length > 280) {
      sitem.description = sitem.description.substr(0, 280) + " ...";
    }
    const formurl_lg =
      sitem.website.substr(0, 95) + (sitem.website.length > 95 ? "..." : "");
    const formurl = sitem.website.substr(0, 33) + " ...";
    return (
      <div
        key={sitem.url}
        className="card h-100 text-primary border-0 bg-light col-12 col-sm-6 col-lg-4 col-xl-3 p-3"
      >
        <div className="card-header py-1">{sitem.type.toUpperCase()}</div>

        <a href={sitem.url} target="blank" className="mt-2 py-2">
          <h6 className="searched maxer-500 pb-0 hover-green">{sitem.title}</h6>
        </a>

        {sitem.description ? (
          <p className="text-muted">{sitem.description}</p>
        ) : null}

        <div class="dropdown">
          <button
            class="btn btn-success btn-sm dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Add to playlist
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div class="dropdown-item">Playlists here</div>
          </div>
        </div>
        <div className="btn btn-sm">read later</div>

        <div className="pt-3 info bottom-0">
          <span className="d-block d-md-inline mb-1 mb-md-0">
            <b>Provider:</b> {sitem.provider.name}
          </span>
        </div>
      </div>
    );
  };
  SearchItemsUL = item => {
    return (
      <div className="row mx-auto">
        {this.state.api_search.rec_materials.map(item => this.SearchItem(item))}
      </div>
    );
  };
  LoadingIcon = () => (
    <div className="d-relative">
      <div className="loading-icon mx-auto bg-none" />
    </div>
  );

  // OTHER

  // RENDER VIEW
  render() {
    return (
      <Layout>
        <div className="text-primary container">
          <this.SearchDIV />
          {this.state.loading ? <this.LoadingIcon /> : null}
          <div className="pb-5">
            <div className="maxer-880 mx-auto" id="search">
              <this.NrOfSearches />
              <this.SearchItemsUL />
              <this.BottomPagination />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Search;
