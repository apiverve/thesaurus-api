using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.Thesaurus
{
    /// <summary>
    /// Query options for the Thesaurus API
    /// </summary>
    public class ThesaurusQueryOptions
    {
        /// <summary>
        /// The word for which you want to get synonyms
        /// </summary>
        [JsonProperty("word")]
        public string Word { get; set; }
    }
}
