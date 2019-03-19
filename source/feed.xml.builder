xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  xml.title "Ember Blog"
  xml.subtitle "Ember News and Updates"
  xml.id "http://emberjs.com/blog"
  xml.link "href" => "https://blog.emberjs.com/"
  xml.link "href" => "https://blog.emberjs.com/feed.xml", "rel" => "self"
  xml.updated blog.articles.first.date.to_time.iso8601
  xml.author { xml.name "Ember" }

  blog.articles[0..5].each do |article|
    xml.entry do
      entry_url = "https://blog.emberjs.com#{article.url}"

      xml.title article.title
      xml.link "rel" => "alternate", "href" => entry_url
      xml.id "http://emberjs.com/blog#{article.url}"
      xml.published article.date.to_time.iso8601
      xml.updated article.date.to_time.iso8601
      xml.author { xml.name "Ember" }
      xml.summary article.summary, "type" => "html"
      xml.content article.body, "type" => "html"
    end
  end
end
