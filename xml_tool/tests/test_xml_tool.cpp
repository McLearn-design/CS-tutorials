// tests/test_xml_tool.cpp
// =======================
// Unit tests for the XML Tool library using GoogleTest.
// Each function gets its own test suite.

#include <gtest/gtest.h>
#include "xml_tool.h"

// ============================================================
// TEST SUITE: LoadXML
// ============================================================
// Tests for the loadXML function.
// ============================================================

TEST(LoadXMLTest, LoadsValidFile) {
    XMLDocument doc;
    bool success = loadXML("data/sample.xml", doc);
    
    EXPECT_TRUE(success);
    EXPECT_NE(doc.RootElement(), nullptr);
}

TEST(LoadXMLTest, FailsOnMissingFile) {
    XMLDocument doc;
    bool success = loadXML("nonexistent.xml", doc);
    
    EXPECT_FALSE(success);
}

TEST(LoadXMLTest, FailsOnEmptyPath) {
    XMLDocument doc;
    bool success = loadXML("", doc);
    
    EXPECT_FALSE(success);
}

TEST(LoadXMLTest, RootElementHasCorrectName) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    XMLElement* root = doc.RootElement();
    ASSERT_NE(root, nullptr);
    EXPECT_STREQ(root->Name(), "catalog");
}


// ============================================================
// TEST SUITE: CollectTags
// ============================================================
// Tests for the collectTags function.
// ============================================================

TEST(CollectTagsTest, FindsAllTags) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    std::vector<std::string> tags;
    collectTags(&doc, tags);
    
    // sample.xml has: catalog, book, title, author, book, title, author
    EXPECT_EQ(tags.size(), 7);
}

TEST(CollectTagsTest, IncludesRootElement) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    std::vector<std::string> tags;
    collectTags(&doc, tags);
    
    // Check that "catalog" is in the list
    bool found = false;
    for (const auto& tag : tags) {
        if (tag == "catalog") {
            found = true;
            break;
        }
    }
    EXPECT_TRUE(found);
}

TEST(CollectTagsTest, EmptyDocumentReturnsEmptyVector) {
    XMLDocument doc;  // Empty, not loaded
    
    std::vector<std::string> tags;
    collectTags(&doc, tags);
    
    EXPECT_EQ(tags.size(), 0);
}


// ============================================================
// TEST SUITE: FindElement
// ============================================================
// Tests for the findElement function.
// ============================================================

TEST(FindElementTest, FindsExistingElement) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    XMLElement* elem = findElement(&doc, "title");
    
    EXPECT_NE(elem, nullptr);
}

TEST(FindElementTest, ReturnsNullForMissingElement) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    XMLElement* elem = findElement(&doc, "nonexistent");
    
    EXPECT_EQ(elem, nullptr);
}


// ============================================================
// TEST SUITE: IsValidTagName
// ============================================================
// Tests for input validation using <cctype> functions.
// ============================================================

TEST(IsValidTagNameTest, AcceptsValidNames) {
    EXPECT_TRUE(isValidTagName("book"));
    EXPECT_TRUE(isValidTagName("Book123"));
    EXPECT_TRUE(isValidTagName("my_tag"));
    EXPECT_TRUE(isValidTagName("_private"));
}

TEST(IsValidTagNameTest, RejectsInvalidNames) {
    EXPECT_FALSE(isValidTagName(""));           // empty
    EXPECT_FALSE(isValidTagName("hello world")); // space
    EXPECT_FALSE(isValidTagName("tag!"));        // special char
    EXPECT_FALSE(isValidTagName("my-tag"));      // hyphen
    EXPECT_FALSE(isValidTagName("tag.name"));    // dot
}


// ============================================================
// TEST SUITE: RenameTag
// ============================================================
// Tests for the renameTag function.
// ============================================================

TEST(RenameTagTest, RenamesExistingTag) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    bool success = renameTag(doc, "catalog", "library");
    
    EXPECT_TRUE(success);
    EXPECT_EQ(findElement(&doc, "catalog"), nullptr);   // Old name gone
    EXPECT_NE(findElement(&doc, "library"), nullptr);   // New name exists
}

TEST(RenameTagTest, FailsForMissingTag) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    bool success = renameTag(doc, "nonexistent", "newname");
    
    EXPECT_FALSE(success);
}

TEST(RenameTagTest, PreservesChildren) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    renameTag(doc, "catalog", "library");
    
    XMLElement* library = findElement(&doc, "library");
    ASSERT_NE(library, nullptr);
    
    // Should still have book children
    XMLElement* book = library->FirstChildElement("book");
    EXPECT_NE(book, nullptr);
}


// ============================================================
// TEST SUITE: DeleteTag
// ============================================================
// Tests for the deleteTag function.
// ============================================================

TEST(DeleteTagTest, DeletesExistingTag) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    bool success = deleteTag(doc, "author");
    
    EXPECT_TRUE(success);
}

TEST(DeleteTagTest, FailsForMissingTag) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    bool success = deleteTag(doc, "nonexistent");
    
    EXPECT_FALSE(success);
}


// ============================================================
// TEST SUITE: XmlToJson
// ============================================================
// Tests for JSON conversion.
// ============================================================

TEST(XmlToJsonTest, HasRootElement) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    json j = xmlToJson(doc);
    
    EXPECT_TRUE(j.contains("catalog"));
}

TEST(XmlToJsonTest, IncludesAttributes) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    json j = xmlToJson(doc);
    
    // First book should have @id
    json firstBook = j["catalog"]["children"][0];
    EXPECT_TRUE(firstBook.contains("@id"));
    EXPECT_EQ(firstBook["@id"], "b1");
}

TEST(XmlToJsonTest, IncludesTextContent) {
    XMLDocument doc;
    loadXML("data/sample.xml", doc);
    
    json j = xmlToJson(doc);
    
    // First book's title should have text
    json title = j["catalog"]["children"][0]["children"][0];
    EXPECT_TRUE(title.contains("#text"));
    EXPECT_EQ(title["#text"], "Learn C++");
}


// ============================================================
// MAIN
// ============================================================
// GoogleTest provides main() when we link with -lgtest_main.
// No need to write our own.
// ============================================================
